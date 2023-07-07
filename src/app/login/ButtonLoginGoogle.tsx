'use client'

import { signIn } from "next-auth/react"
import { FcGoogle } from 'react-icons/fc'

function ButtonLoginGoogle() {

  return (
    <button
      onClick={() => signIn('google')}
      className='bg-white h-12 text-black mt-6 rounded-lg flex items-center justify-center gap-4 text-xl hover:bg-slate-200'>
      Login com Google
      <FcGoogle />
    </button>
  )
}

export default ButtonLoginGoogle