'use client'

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

function BtnDeslogar() {

  const router = useRouter()

  function deslogar() {
    signOut()
    router.push('/')
  }

  return (
    <button onClick={deslogar} className="flex items-center gap-4 hover:underline hover:underline-1">
      <span>Sair</span>
      <FiArrowRight />
    </button>
  )

}

export default BtnDeslogar