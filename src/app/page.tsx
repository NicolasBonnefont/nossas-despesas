'use client'
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { FiPlusCircle } from "react-icons/fi"
import Lancamentos from "./components/lancamentos"
import { EmailContexto } from "./components/Providers/EmailProvider"
import Totais from "./components/totais"

export const revalidate = 1

async function getLancamentos(email: string) {
  const response = await fetch(process.env.URL + '/api/lancamentos?email=' + email)
  const lancamentos = response.json()
  return lancamentos
}

async function getTotais(email: string) {
  const response = await fetch(process.env.URL + '/api/lancamentos/totais?email=' + email)
  const totais = response.json()
  return totais
}

function Home() {

  const [totais, setTotais] = useState<any>()
  const [lancamentos, setLancamentos] = useState<any>()

  const { email, status } = useContext(EmailContexto)

  async function CarregaDados(email: string) {
    const totais = await getTotais(email)
    const lancamentos = await getLancamentos(email)

    setTotais(totais)
    setLancamentos(lancamentos)

  }

  useEffect(() => {

    if (status !== 'loading' || !status) {

      if (email) {
        CarregaDados(email)
      }

    }

  }, [email])

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