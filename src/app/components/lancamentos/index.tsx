'use client'

import { BounceLoader } from "react-spinners";
import CardLancamentos from "./card-lancamentos/CardLancamentos";

type props = {
  lancamentos: {
    descricao: string;
    valor: number
    total_parcelas: number;
    parcela_atual: number;
    tipo: 'entrada' | 'saida'
    repete_todos_meses: boolean;
    id: number
  }[]
}

function Lancamentos({ lancamentos }: props) {

  return (
    <div className="flex flex-col items-center gap-2 max-h-[40vh] overflow-auto p-6">

      {
        lancamentos[0] && lancamentos.map(lancamento => (
          <CardLancamentos
            key={lancamento.id}
            id={lancamento.id}
            descricao={lancamento.descricao}
            valor={String(lancamento.valor)}
            tipo={lancamento.tipo}
            setLancamentos={() => { }}
            lancamentos={lancamentos}
          />
        ))
      }

      <div className="flex items-center gap-6">
        <p className="text-white">Loading</p>
        <BounceLoader color="white" />
      </div>


    </div>

  )
}

export default Lancamentos