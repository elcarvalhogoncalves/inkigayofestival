import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function POST(request: Request, response: Response) {
    const data = await request.json();
    const ticketList = [];

    
    const userExists = await prisma.user.findFirst({
        where: {
            email: data.userEmail,
        },
    })

    if(!userExists) {
        throw new Error("Usuário não existe.");
    }

    for(let i = 0; i < data.cart.length; i++) {
        for(let j = 0; j < data.cart[i].quantidade; j++) {
            const ticket = await fetch("http://localhost:3000/api/ticket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    dia: data.cart[i].dia,
                    nome: data.cart[i].nome,
                    preco: data.cart[i].preco,
                    userId: userExists.id,
                }),
        });
            const res = await ticket.json();
            ticketList.push(res.id);
        }
    }

    return NextResponse.json({message: "Pedido realizado com sucesso.", tickets: ticketList}, {status: 200,});

}

