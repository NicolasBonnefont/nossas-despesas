'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/db/prisma";
import { lancamentos } from "@prisma/client";
import { getServerSession } from "next-auth";

type totaisProps = {
  total_entrada: number
  total_saida: number
  total: number
}

async function getLancamentos() {
  try {

    const data = await getServerSession(authOptions);

    if (!data) {
      throw Error('Não logado com sessão valida')
    }

    const email = data?.user?.email!


    const lancamentos = await prisma.lancamentos.findMany({
      where: {
        email_cliente: email,
        data_parcela: {
          lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    })

    return lancamentos

  } catch (error) {
    throw error
  }
}

async function getTotais(): Promise<totaisProps> {

  try {
    const data = await getServerSession(authOptions);

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

    const resultado = {
      total_entrada: Number(total_entrada.toFixed(2)),
      total_saida: Number(total_saida.toFixed(2)),
      total: Number(totais.toFixed(2))
    }

    return resultado

  } catch (error: any) {
    console.log(error)
    return error
  }

}

async function getUmLancamento(id: number): Promise<lancamentos | null> {

  if (!id) {
    return null
  }

  const lancamento = await prisma.lancamentos.findUnique({
    where: {
      id
    }
  })

  if (!lancamento) {
    return null
  }


  return lancamento
}
export { getLancamentos, getTotais, getUmLancamento };
