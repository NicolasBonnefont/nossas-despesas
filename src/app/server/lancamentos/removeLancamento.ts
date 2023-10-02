'use server'

import prisma from "@/db/prisma"
import { revalidatePath, revalidateTag } from "next/cache"

async function RemoveLancamento(id_doc: string) {
  try {

    await prisma.lancamentos.deleteMany({
      where: {
        id_doc
      },
    })

    revalidatePath('/dash')
    revalidateTag('/dash')

  } catch (error) {
    return error
  }
}

export default RemoveLancamento