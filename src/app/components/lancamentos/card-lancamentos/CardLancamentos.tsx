'use client'
import RemoveLancamento from "@/app/server/lancamentos/removeLancamento";
import { useState } from "react";
import { FiArrowDownCircle, FiArrowUpCircle, FiTrash2 } from "react-icons/fi";
import { BounceLoader } from "react-spinners";

type cardProps = {
  id: number
  descricao: string,
  valor: string
  tipo: 'entrada' | 'saida'
}

function CardLancamentos({ descricao, valor, tipo, id }: cardProps) {

  const [loading, setLoading] = useState(false)

  async function ExcluiLancamento(id: number) {

    setLoading(true)

    await RemoveLancamento(id)
      .catch(error => {
        location.reload()
      })
  }

  return (

    <div className={`bg-white max-sm:text-sm font-bold flex w-full h-16 rounded-xl items-center p-8 ${tipo == 'saida' ? 'text-red-600' : 'text-green-600'}  hover:bg-gray-200`}>

      <div className="flex items-center gap-4">
        <button disabled={loading} onClick={() => ExcluiLancamento(id)} className='flex items-center'>
          {
            loading ?
              <BounceLoader size='24' color='red' />
              :
              <FiTrash2 className="cursor-pointer" color="red" />
          }
        </button>
        <p>{descricao}</p>
      </div>

      <div className="ml-auto flex items-center gap-4 " >
        <p>R$ {valor}</p>
        {
          tipo == 'saida' ?
            <FiArrowDownCircle />
            :
            <FiArrowUpCircle />
        }
      </div>

    </div>
  )
}

export default CardLancamentos