'use client'

import { SessionProvider } from "next-auth/react"
import React from "react"
import { EmailProvider } from "./EmailProvider"

const Provider = ({children} : { children : React.ReactNode}) => {
  return (
    <SessionProvider>
      <EmailProvider>
        {children}
      </EmailProvider>
    </SessionProvider>
  )
}

export default Provider