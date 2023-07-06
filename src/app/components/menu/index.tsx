'use client'
import { signIn, signOut } from 'next-auth/react';
import Image from "next/image";
import { useContext, useEffect } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { EmailContexto } from '../Providers/EmailProvider';

function Menu() {
  const { data, status, setEmail } = useContext(EmailContexto)

  useEffect(() => {

    if (status == 'loading' || !status) {
      return
    } else {
      if (data?.user?.email) {
        setEmail(data?.user?.email)
      } else {
        setEmail(`${new Date().getTime()}@convidado`)
      }
    }

  }, [data, status])

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
            <button onClick={() => signOut()} className="flex items-center gap-4 hover:underline hover:underline-1">
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