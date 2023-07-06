
import Link from "next/link"
import { FiPlusCircle } from "react-icons/fi"
import Lancamentos from "./components/lancamentos"
import Totais from "./components/totais"

export const revalidate = 60

async function Home() {

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