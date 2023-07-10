'use client'

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

function BtnDeslogar() {


  return (
    <button onClick={()=> signOut()} className="flex items-center gap-4 hover:underline hover:underline-1">
      <span>Sair</span>
      <FiArrowRight />
    </button>
  )

}

export default BtnDeslogar