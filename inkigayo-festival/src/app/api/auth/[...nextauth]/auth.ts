import NextAuth from 'next-auth'
import { NextAuthOptions } from 'next-auth'
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


export const authOptions : NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
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
        async authorize(credentials, req) : Promise<any> {
            const user = await prisma.user.findUnique({
                where: {
                    email: credentials?.email,
                },
            });
            if(!user) {
                throw new Error("Usuário não encontrado.");
            }
            const pass = credentials?.password || '';
            const checkPassword = await compare(pass , user.senha);

            if(!checkPassword || user.email !== credentials?.email) {
                throw new Error(`E-mail ou senha inválidos.`);
            }
            if (user) {
                return user
            } else {
                return null
            }
        }
      }),

  ],
    pages: {
        signIn: '/signin',
    },
    session: {
        strategy: 'jwt',
    }

};
