import prisma from '@/db/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

  try {
    const lancamentos = await prisma.lancamentos.findMany()

    return NextResponse.json(lancamentos)

  } catch (error) {
    throw error
  }

}