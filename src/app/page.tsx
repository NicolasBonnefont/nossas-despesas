
import { getServerSession } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"
import { FiPlusCircle } from "react-icons/fi"
import { authOptions } from "./api/auth/[...nextauth]/route"
import Lancamentos from "./components/lancamentos"
import Totais from "./components/totais"

async function Home() {

  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dash/' + session.user?.email)
  }

  return (

    <div className="flex flex-1 w-full h-full justify-center ">

      <div className="flex flex-col  w-[1300px]">

        <Totais />

        <div className="flex justify-between items-center  text-white font-bold p-6 text-md">
          <p className="">Lançamento do mês:</p>

          <Link href="/novo-lancamento"
            className=" flex items-center gap-2 p-4 text-sm text-white font-extrabold bg-green-500  rounded-lg shadow-md hover:bg-green-400">
            Novo Lançamento
            <FiPlusCircle />
          </Link>

        </div>

        <Lancamentos />


      </div>

    </div>
  )
}

export default Home