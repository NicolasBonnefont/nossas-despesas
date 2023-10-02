'use client'

import RemoveLancamento from "@/app/server/lancamentos/removeLancamento";
import { useState } from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { BounceLoader } from "react-spinners";
import { DropdownMenuDemo } from "./DropDown";

type cardProps = {
  id: number
  descricao: string,
  valor: string
  tipo: 'entrada' | 'saida'
  parcela_atual?: number | null
  total_parcelas?: number | null,
  id_doc: string
}

function CardLancamentos({ descricao, valor, tipo, id, parcela_atual, total_parcelas, id_doc }: cardProps) {

  const [loading, setLoading] = useState(false)

  async function ExcluiLancamento() {

    setLoading(true)

    await RemoveLancamento(id_doc)
      .catch(error => {
        location.reload()
      })
  }

  return (

    <div className={`bg-white max-sm:text-sm font-bold flex w-full h-16 rounded-xl items-center p-8 ${tipo == 'saida' ? 'text-red-600' : 'text-green-600'}  hover:bg-gray-200`}>

      <div className="flex items-center gap-4">
        <p>{descricao}</p>
      </div>


      {
        parcela_atual &&

        <div className="flex items-center gap-4 ml-4">
          <p>{parcela_atual}/{total_parcelas}</p>
        </div>
      }

      <div className="ml-auto flex items-center gap-4 " >
        <p>R$ {valor}</p>
        {
          tipo == 'saida' ?
            <FiArrowUpCircle />
            :
            <FiArrowDownCircle />
        }

        {
          loading ? <BounceLoader size='24' color='red' />
            :
            <DropdownMenuDemo
              ExcluiLancamento={ExcluiLancamento}
              id={id}
            />
        }

      </div>

    </div>
  )
}

export default CardLancamentos