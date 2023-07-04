import prisma from '@/db/prisma'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 30

export async function GET(request: NextRequest) {

  try {
    const lancamentos = await prisma.lancamentos.findMany()

    revalidatePath('/')

    return NextResponse.json(lancamentos)

  } catch (error) {
    throw error
  }

}
