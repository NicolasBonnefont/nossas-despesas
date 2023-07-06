'use client'

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";


function BtnDeslogar() {

  const session = useSession()
  const router = useRouter()

  useEffect(() => {

    if (session.status == 'authenticated') {

      if (session.data.user?.email !== location.href.split('/dash/')[1]) {
        console.log('?')
        signOut()
      }

    }

  }, [session])

  return (
    <button onClick={() => signOut()} className="flex items-center gap-4 hover:underline hover:underline-1">
      <span>Deslogar</span>
      <FiArrowRight />
    </button>
  )

}

export default BtnDeslogar