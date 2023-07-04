'use server'

import prisma from "@/db/prisma"
import { revalidateTag } from "next/cache"

async function RemoveLancamento(id: number) {
  try {

    await prisma.lancamentos.delete({
      where: {
        id
      }
    })

    revalidateTag('/')

    return

  } catch (error) {
    return error
  }
}

export default RemoveLancamento