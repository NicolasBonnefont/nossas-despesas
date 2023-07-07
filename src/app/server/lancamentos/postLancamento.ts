"use server"

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/db/prisma";
import { lancamentos } from "@prisma/client";
import { getServerSession } from "next-auth";
import { revalidateTag, revalidatePath } from "next/cache";


async function PostLancamento({ ...dados }: lancamentos) {

  try {

    const data = await getServerSession(authOptions);

    const email = data?.user?.email!

    const busca_usuario = await prisma.usuario.findFirst({
      where: {
        email
      }
    })

    await prisma.lancamentos.create({
      data: {
        descricao: dados.descricao,
        tipo: dados.tipo,
        parcela_atual: 1,
        total_parcelas: 1,
        valor: dados.valor,
        repete_todos_meses: false,
        email_cliente: busca_usuario?.email!,
        id_usuario: busca_usuario?.id!
      }
    })

    const tag = '/dash'

    revalidatePath(tag)

    return busca_usuario?.id

  } catch (error) {
    console.log(error)
    throw error
  }

}

export default PostLancamento