import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request, response: Response) {
    const { name, email, password } = await request.json();

    const userExists = await prisma.user.findFirst({
        where: {
            email: email,
        },
    })

    if(userExists) {
        return NextResponse.json({message: "E-mail já existente.",}, {status: 400,});
    }

    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        return NextResponse.json({message: "E-mail inválido.",}, {status: 400,});
    }

    if(password.length < 8 || password.length > 20) {
        return NextResponse.json({message: "Senha necessita ser maior de 8 e maior de 20.",}, {status: 400,});
    }

    const passwordHash = await bcryptjs.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            senha: passwordHash,
        },
    });

    const {senha:_ , ...user} = newUser;

    return NextResponse.json({message: "Usuário cadastrado com sucesso.", user: user}, {status: 200,});

}

