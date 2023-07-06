
import prisma from '@/db/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 0

export async function GET(request: NextRequest) {

  try {
    const email = request.nextUrl.searchParams.get('email')!

    const entradas = await prisma.lancamentos.aggregate({
      _sum: {
        valor: true
      },
      where: {
        tipo: 'entrada',
        email_cliente: email
      }
    })

    const saidas = await prisma.lancamentos.aggregate({
      _sum: {
        valor: true
      },
      where: {
        tipo: 'saida',
        email_cliente: email
      }
    })

    const total_entrada = Number(entradas?._sum.valor) ? Number(entradas?._sum.valor) : 0
    const total_saida = Number(saidas?._sum.valor) ? Number(saidas?._sum.valor) : 0

    const totais = total_entrada - total_saida

    return NextResponse.json(
      {
        total_entrada: Number(total_entrada.toFixed(2)),
        total_saida: Number(total_saida.toFixed(2)),
        total: Number(totais.toFixed(2))
      }
    )

  } catch (error: any) {
    console.log(error)
    return error
  }


}