import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import logo from '../../../public/novo-lancamento/money.png'
import { authOptions } from '../api/auth/[...nextauth]/route'
import ButtonLoginGoogle from './ButtonLoginGoogle'

async function Login() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dash/' + session.user?.email)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center ">

      <div className="flex flex-col w-auto h-auto p-8 rounded-xl text-white text-center">

        <Image
          src={logo}
          width={450}
          height={450}
          alt='logo'
        />

        <h1 className='text-2xl font-bold'>Administre teu Money ! 💰</h1>

        <ButtonLoginGoogle />


      </div>

    </div>
  )
}

export default Login