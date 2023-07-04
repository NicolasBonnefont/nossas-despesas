import RemoveLancamento from "@/app/server/lancamentos/removeLancamento";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
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
  setLancamentos: Dispatch<SetStateAction<lancamentosProps[]>>
  lancamentos: lancamentosProps[]
}

function CardLancamentos({ descricao, valor, tipo, id, lancamentos, setLancamentos }: cardProps) {

  const router = useRouter()

  async function ExcluiLancamento(id: number) {

    let novo_lancamentos = lancamentos.filter(lancamento => lancamento.id !== id)
    setLancamentos(novo_lancamentos)

    await RemoveLancamento(id)
      .catch(error => {
        router.refresh()
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