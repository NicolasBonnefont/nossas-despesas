
import prisma from '@/db/prisma';
import { NextRequest, NextResponse } from 'next/server';
export const revalidate = 1

export async function GET(request: NextRequest) {

  try {

    console.log(request.nextUrl.searchParams.get('email'))

    const email = request.nextUrl.searchParams.get('email')!

    console.log(email)

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
