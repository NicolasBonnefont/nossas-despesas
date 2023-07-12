
import prisma from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

export const revalidate = 0

export async function GET() {

  try {

    const data = await getServerSession(authOptions);

    const email = data?.user?.email!

    if (!data) {      
      throw Error('Não logado com sessão valida')      
    }

    const lancamentos = await prisma.lancamentos.findMany({
      where: {
        email_cliente: email,
        data_parcela: {
          lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    })

    return NextResponse.json(lancamentos)

  } catch (error) {
    throw error
  }

}
