import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Lancamentos from "@/app/components/lancamentos"
import Totais from "@/app/components/totais"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"
import { FiPlusCircle } from "react-icons/fi"

async function Logado() {

  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <>
      <div className="flex flex-1 w-full h-full justify-center my-auto 2xl:mt-20">

        <div className="flex flex-col  w-[1300px]">

          <Totais />

          <div className="flex justify-between items-center  text-white font-bold p-6 text-md">
            <p className="">Lançamento do mês:</p>

            <Link href="/dash/novo-lancamento"
              className=" flex items-center gap-2 p-4 text-sm text-white font-extrabold bg-green-500  rounded-lg shadow-md hover:bg-green-400">
              Novo Lançamento
              <FiPlusCircle />
            </Link>

          </div>

          <Lancamentos />

        </div>

      </div>
    </>

  )

}

export default Logado