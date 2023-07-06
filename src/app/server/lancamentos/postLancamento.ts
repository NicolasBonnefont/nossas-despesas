'use server'

import prisma from "@/db/prisma"
import { lancamentos } from "@prisma/client"
import { revalidateTag } from "next/cache"

async function PostLancamento({ ...dados }: lancamentos) {

  try {

    await prisma.lancamentos.create({
      data: {
        descricao: dados.descricao,
        tipo: dados.tipo,
        parcela_atual: 1,
        total_parcelas: 1,
        valor: dados.valor,
        repete_todos_meses: dados.repete_todos_meses,
        email_cliente: dados.email_cliente
      }
    })

    revalidateTag('/')

    return

  } catch (error) {
    console.log(error)
    throw error
  }

}

export default PostLancamento