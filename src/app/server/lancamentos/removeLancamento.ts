'use server'

import prisma from "@/db/prisma"

async function RemoveLancamento(id: number) {
  try {

    const del = await prisma.lancamentos.delete({
      where: {
        id
      },
      include: {
        usuario: true
      }
    })

    return

  } catch (error) {
    return error
  }
}

export default RemoveLancamento