
import prisma from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

export const revalidate = 1

export async function GET(request: NextRequest) {

  try {
    const data = await getServerSession(authOptions);

    const email = data?.user?.email!

    const lancamentos = await prisma.lancamentos.findMany({
      where: {
        email_cliente: email
      }
    })

    return NextResponse.json(lancamentos)

  } catch (error) {
    throw error
  }

}
