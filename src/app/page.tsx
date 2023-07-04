import axios from 'axios'
import Link from "next/link"
import { FiPlusCircle } from "react-icons/fi"
import Lancamentos from "./components/lancamentos"
import Totais from "./components/totais"

export const revalidate = 5

async function getLancamentos() {
  const response = await fetch(process.env.URL + '/api/lancamentos')
  const lancamentos = await response.json()

  return lancamentos

}

async function getTotais() {
  const response2 = await fetch(process.env.URL + '/api/lancamentos/totais')
  const totais = await response2.json()

  return totais
}

async function Home() {

  const totais = await getTotais()
  const lancamentos = await getLancamentos()

  return (

    <div className="flex flex-1 flex-col w-full h-full p-10 px-32 gap-4">

      <Totais totais={totais} />

      <div className="flex justify-between items-center  text-white font-bold p-6">
        <p className="">Lançamento do mês:</p>

        <Link href="/novo-lancamento" className=" flex items-center gap-2 p-4  text-black  rounded-lg shadow-md bg-white hover:bg-gray-100">
          Novo Lançamento
          <FiPlusCircle />
        </Link>

      </div>

      <Lancamentos lancamentos={lancamentos} />

    </div>
  )
}

export default Home