import { ReactElement } from "react"
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi"

type cardProps = {
  descricao: string,
  valor: string
  tipo: 'entrada' | 'saida'
}

function CardLancamentos({ descricao, valor, tipo }: cardProps) {
  return (

    <div className={`bg-white flex w-full h-16 rounded-xl items-center p-8 ${tipo == 'saida' ? 'text-red-600' : 'text-gray-600'} cursor-pointer hover:bg-gray-200`}>

      <p>{descricao}</p>

      <div className="ml-auto flex items-center gap-4" >
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