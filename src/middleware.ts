import type { NextRequest } from 'next/server'
import { NextResponse } from "next/server"

export async function middleware(request: NextRequest) {

  try {

    return NextResponse.next()

  } catch (error) {
    console.log(error)
  }
}

export const config = {
  matcher: ['/dash/'],
}