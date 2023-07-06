'use client'

import { signIn } from "next-auth/react";
import { FiArrowRight } from "react-icons/fi";

function BtnLogar() {
  return (
    <button onClick={() => signIn('google')} className="flex items-center gap-4 hover:underline hover:underline-1">
      <span>login</span>
      <FiArrowRight />
    </button>
  )
}

export default BtnLogar