
import prisma from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/route';

export const revalidate = 0

export async function GET() {

  try {
    const data = await getServerSession(authOptions);
    /* 
        if (!data) {
          throw Error('Não logado com sessão valida')
        } */

    const email = data?.user?.email!

    const entradas_fixas = await prisma.lancamentos.aggregate({
      _sum: {
        valor: true
      },
      where: {
        tipo: 'entrada',
        email_cliente: email,
        repete_todos_meses: true,
        data_parcela: {
          lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    })

    const entradas_manuais = await prisma.lancamentos.aggregate({
      _sum: {
        valor: true
      },
      where: {
        tipo: 'entrada',
        email_cliente: email,
        repete_todos_meses: false,
        created_at: {
          lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    })

    const saidas_fixas = await prisma.lancamentos.aggregate({
      _sum: {
        valor: true
      },
      where: {
        tipo: 'saida',
        email_cliente: email,
        repete_todos_meses: true,
        data_parcela: {
          lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    })

    const saidas_parcelas = await prisma.lancamentos.aggregate({
      _sum: {
        valor: true
      },
      where: {
        tipo: 'saida',
        email_cliente: email,
        total_parcelas: {
          gte: 1
        },
        data_parcela: {
          lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    })

    const saidas_manuais = await prisma.lancamentos.aggregate({
      _sum: {
        valor: true
      },
      where: {
        tipo: 'saida',
        email_cliente: email,
        total_parcelas: 0,
        repete_todos_meses: false,
        created_at: {
          lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    })

    const total_entrada = Number(entradas_fixas?._sum.valor) + Number(entradas_manuais?._sum.valor)
    const total_saida = Number(saidas_fixas._sum.valor) + Number(saidas_parcelas?._sum.valor) + Number(saidas_manuais?._sum.valor)

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