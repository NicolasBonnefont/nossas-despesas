'use server'

import prisma from "@/db/prisma"

async function RemoveLancamento(id: number) {
  try {

    await prisma.lancamentos.delete({
      where: {
        id
      }
    })

    return

  } catch (error) {
    return error
  }
}

export default RemoveLancamento