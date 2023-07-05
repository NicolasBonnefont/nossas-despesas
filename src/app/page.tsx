import Link from "next/link"
import { FiPlusCircle } from "react-icons/fi"
import Lancamentos from "./components/lancamentos"
import Totais from "./components/totais"

export const revalidate = 60 * 60 //1 hora

async function getLancamentos() {
  const response = await fetch(process.env.URL + '/api/lancamentos')
  const lancamentos = response.json()
  return lancamentos
}

async function getTotais() {
  const response = await fetch(process.env.URL + '/api/lancamentos/totais')
  const totais = response.json()
  return totais
}

async function Home() {

  const totais = await getTotais()
  const lancamentos = await getLancamentos()

  return (

    <div className="flex flex-1 w-full h-full justify-center ">

      <div className="flex flex-col  w-[1300px]">

        <Totais totais={totais} />

        <div className="flex justify-between items-center  text-white font-bold p-6 text-md">
          <p className="">Lançamento do mês:</p>

          <Link href="/novo-lancamento"
            className=" flex items-center gap-2 p-4 text-sm text-white font-extrabold bg-green-500  rounded-lg shadow-md hover:bg-green-400">
            Novo Lançamento
            <FiPlusCircle />
          </Link>

        </div>

        <Lancamentos lancamentos={lancamentos} />

      </div>

    </div>
  )
}

export default Home