import { getLancamentos } from "@/app/server/lancamentos/Lancamentos";
import CardLancamentos from "./card-lancamentos/CardLancamentos";

export const revalidate = 0

async function Lancamentos() {

  const lancamentos = await getLancamentos()

  return (
    <div className="flex flex-col items-center gap-2 max-h-[60vh] overflow-auto p-6 ">

      {
        lancamentos.length > 0 && lancamentos?.map(lancamento => (
          <CardLancamentos
            key={lancamento.id}
            id={lancamento.id}
            descricao={lancamento.descricao}
            valor={String(lancamento.valor)}
            tipo={lancamento.tipo}
          />
        ))
      }

      {
        lancamentos && !lancamentos[0] &&
        <span className="text-white max-sm:text-sm">Sem lançamentos 😉</span>
      }

    </div>

  )
}

export default Lancamentos