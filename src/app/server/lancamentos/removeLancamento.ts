'use server'

import prisma from "@/db/prisma"
import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

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

    const tag ='/dash'

    revalidatePath(tag)

    return

  } catch (error) {
    return error
  }
}

export default RemoveLancamento