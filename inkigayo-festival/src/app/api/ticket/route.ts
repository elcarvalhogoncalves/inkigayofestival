import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('id');

    
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })
  
    if(!user) {
        return NextResponse.json({message: "Usuário não existe.",}, {status: 400,});
    }

    const tickets = await prisma.ingresso.findMany({
        where: {
            userId: user.id,
        },
    })

    delete user.id;
    delete user.senha;
    const dados ={
        user: user,
        tickets: tickets,
    }

    return NextResponse.json(dados, {status: 200,});
}
export async function POST(request: Request, response: Response) {
    const { dia, nome, preco, userId } = await request.json();

    const userExists = await prisma.user.findFirst({
        where: {
            id: userId,
        },
    })

    if(!userExists) {
        
        return NextResponse.json({message: "Usuário não existe",}, {status: 400,});
    }


    const newTicket = await prisma.ingresso.create({
        data: {
            dia: dia,
            nome: nome,
            preco: preco,
            userId: userId,
        },
    });
    

    const {id} = newTicket;

    return NextResponse.json({message: "Ingresso cadastrado com sucesso.", id: id}, {status: 200,});

}

