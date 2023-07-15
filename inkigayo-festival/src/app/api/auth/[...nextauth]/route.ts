import NextAuth from 'next-auth'
import { PrismaClient } from '@prisma/client'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcryptjs'

interface ProcessEnv {
    [key: string]: string | undefined
}

const prisma = new PrismaClient();

const googleClientId: string = process.env.GOOGLE_ID || '';
const googleClientSecret: string = process.env.GOOGLE_SECRET || '';


export const authOption = {
  providers: [
    // OAuth authentication providers...
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),

    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret
    }),

    CredentialsProvider({
        name: "Credentials",
        credentials: {
          email:    { label: "E-mail", type: "text", placeholder: "exemple@example.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials: { email: string; password: string; }, req){
            const userAccount = await prisma.user.findUnique({
                where: {
                    email: credentials?.email,
                },
            });
            if(!userAccount) {
                throw new Error("Usuário não encontrado.");
            }
            const pass = credentials?.password || '';
            const checkPassword = await compare(pass , userAccount.senha);

            if(!checkPassword || userAccount.email !== credentials?.email) {
                throw new Error(`E-mail ou senha inválidos.`);
            }
            if (userAccount) {
                return userAccount
            } else {
                return null
            }
        }
      } as any),

  ],
    pages: {
        signIn: '/signin',
    },

};

const handler = NextAuth(authOption);

export {handler as GET, handler as POST};