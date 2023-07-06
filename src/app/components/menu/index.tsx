'use client'
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from "next/image";
import { useContext, useEffect } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { EmailContexto } from '../Providers/EmailProvider';

function Menu() {
  const { setEmail, email, data, status } = useContext(EmailContexto)

  useEffect(() => {
    console.log(email)
  }, [email])

  useEffect(() => {
    console.log(localStorage.getItem('email'))

    if (status == 'loading' || !status) {
      return
    } else {
      if (status == 'authenticated' && data?.user?.email) {
        setEmail(data?.user?.email)
        localStorage.setItem('email', data?.user?.email)
        return
      }

      if (!localStorage.getItem('email') || localStorage.getItem('email') !== '') {
        setEmail(localStorage.getItem('email')!)
      } else {
        const emailTemp = `${new Date().getTime()}@convidado`
        setEmail(emailTemp)
        localStorage.setItem('email', emailTemp)
      }

    }

  }, [data, status])


  function Deslogar() {
    signOut()
    localStorage.clear()
    setEmail('')
  }

  return (
    <menu className="flex  w-full h-28 px-32 ">
      {

        status == 'authenticated' ?

          <div className="flex-1 flex items-center justify-between text-end text-white text-md ">
            <div className="flex items-center gap-4">
              <Image
                src={data!.user!.image!}
                alt='Image paerfil'
                width={45}
                height={45}
                className='rounded-lg'
              />
              <span>{data?.user?.name}</span>

            </div>
            <button onClick={Deslogar} className="flex items-center gap-4 hover:underline hover:underline-1">
              <span>Deslogar</span>
              <FiArrowRight />
            </button>
          </div>

          :
          <div className="flex-1 flex items-center justify-end text-end text-white text-md ">
            <button onClick={() => signIn('google')} className="flex items-center gap-4 hover:underline hover:underline-1">
              <span>login</span>
              <FiArrowRight />
            </button>
          </div>
      }

    </menu>
  )

}

export default Menu