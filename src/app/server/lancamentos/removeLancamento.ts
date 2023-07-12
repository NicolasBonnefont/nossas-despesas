'use server'

import prisma from "@/db/prisma"
import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

async function RemoveLancamento(id: number) {
  try {

    await prisma.lancamentos.delete({
      where: {
        id
      },
      include: {
        usuario: true
      }
    })

    revalidatePath('/dash')
    revalidateTag('/dash')

  } catch (error) {
    return error
  }
}

export default RemoveLancamento