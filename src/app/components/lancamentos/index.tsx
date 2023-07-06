'use client'

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
    <div className="flex flex-col items-center gap-2 max-h-[60vh] overflow-auto p-6">

      {
        lancamentos&& lancamentos.map(lancamento => (
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

      {
        lancamentos &&!lancamentos[0] &&
        <span className="text-white">Sem lançamentos 😉</span>
      }

    </div>

  )
}

export default Lancamentos