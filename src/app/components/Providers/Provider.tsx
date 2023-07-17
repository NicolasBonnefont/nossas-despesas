'use client'

import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "next-auth/react"
import React from "react"
import { EmailProvider } from "./EmailProvider"

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <EmailProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </EmailProvider>
    </SessionProvider>
  )
}

export default Provider