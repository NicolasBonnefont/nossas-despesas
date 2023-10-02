"use server"

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/db/prisma";
import { lancamentos } from "@prisma/client";
import { addMonths } from "date-fns";
import { getServerSession } from "next-auth";
import { revalidatePath, revalidateTag } from "next/cache";

async function PostLancamento({ ...dados }: lancamentos) {

  try {

    const data = await getServerSession(authOptions);

    const email = data?.user?.email!

    const busca_usuario = await prisma.usuario.findFirst({
      where: {
        email
      }
    })

    if (dados.total_parcelas && dados.total_parcelas > 0) {

      for (let index = 0; index < dados.total_parcelas; index++) {
        await prisma.lancamentos.create({
          data: {
            descricao: dados.descricao,
            tipo: dados.tipo,
            total_parcelas: dados.total_parcelas,
            valor: dados.valor,
            parcela_atual: index +1,
            repete_todos_meses: false,
            email_cliente: busca_usuario?.email!,
            id_usuario: busca_usuario?.id!,
            data_parcela: addMonths(new Date(), index)
          }
        })
      }

    } else {
      await prisma.lancamentos.create({
        data: {
          descricao: dados.descricao,
          tipo: dados.tipo,
          total_parcelas: dados.total_parcelas,
          valor: dados.valor,
          repete_todos_meses: dados.repete_todos_meses,
          email_cliente: busca_usuario?.email!,
          id_usuario: busca_usuario?.id!
        }
      })
    }

    revalidatePath('/dash')
    revalidateTag('/')

  } catch (error) {
    console.log(error)
    throw error
  }

}

async function UpdateLancamentos(dados: lancamentos) {

  await prisma.lancamentos.update({
    where: {
      id: dados.id
    },
    data: dados
  })

  return

}

export  {PostLancamento,UpdateLancamentos}