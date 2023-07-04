import prisma from '@/db/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

  const lancamentos = await prisma.lancamentos.findMany()

  console.log(lancamentos)

  return NextResponse.json(lancamentos)
}