'use client'
import RemoveLancamento from "@/app/server/lancamentos/removeLancamento";
import { FiArrowDownCircle, FiArrowUpCircle, FiTrash2 } from "react-icons/fi";

type lancamentosProps = {
  id: number;
  descricao: string;
  valor: number;
  total_parcelas: number;
  parcela_atual: number;
  tipo: 'saida' | 'entrada';
  repete_todos_meses: boolean;
}

type cardProps = {
  id: number
  descricao: string,
  valor: string
  tipo: 'entrada' | 'saida'
  lancamentos: lancamentosProps[]
}

function CardLancamentos({ descricao, valor, tipo, id }: cardProps) {

  async function ExcluiLancamento(id: number) {

    await RemoveLancamento(id)
      .catch(error => {
        location.reload()
        console.log(error)
      })
  }

  return (

    <div className={`bg-white font-bold flex w-full h-16 rounded-xl items-center p-8 ${tipo == 'saida' ? 'text-red-600' : 'text-green-600'}  hover:bg-gray-200`}>

      <div className="flex items-center gap-4">
        <button onClick={() => ExcluiLancamento(id)}>
          <FiTrash2 className="cursor-pointer" color="red" />
        </button>
        <p>{descricao}</p>

      </div>

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