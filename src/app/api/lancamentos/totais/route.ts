import prisma from '@/db/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

  try {

    const entradas = await prisma.lancamentos.groupBy({
      by: ['valor'],
      _sum: {
        valor: true
      },
      where: {
        tipo: 'entrada'
      }
    })

    const saidas = await prisma.lancamentos.groupBy({
      by: ['valor'],
      _sum: {
        valor: true
      },
      where: {
        tipo: 'saida'
      }
    })

    const total_entrada = Number(entradas[0]._sum.valor) ? Number(entradas[0]._sum.valor) : 0
    const total_saida = Number(saidas[0]?._sum.valor) ? Number(saidas[0]?._sum.valor) : 0

    const totais = total_entrada - total_saida

    console.log(totais)

    return NextResponse.json(
      {
        total_entrada,
        total_saida,
        total: totais
      }
    )

  } catch (error: any) {
    return error
  }


}