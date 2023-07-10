import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function GET(request: Request) {
    const data = [];
    const days = await prisma.eventDays.findMany({});
    if (!days) {
        throw new Error('Days not found');
    }

    for(let i = 0; i < days.length; i++) {
        const aux = {};
        aux["id"] = days[i].id;
        aux["dia"] = days[i].dia;
        const ingressoType = await prisma.ingressoType.findMany({
            where: {
                daysId: days[i].id,
            },
        });
        if (!ingressoType) {
            throw new Error('IngressoType not found');
        }
        for(let j = 0; j < ingressoType.length; j++) {

            delete ingressoType[j].id;
            delete ingressoType[j].daysId;
        }
        aux["tickets"] = ingressoType
        data.push(aux);
    }

    return NextResponse.json(data, {status: 200,});
}