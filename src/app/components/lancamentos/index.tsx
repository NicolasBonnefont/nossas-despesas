import CardLancamentos from "./card-lancamentos/CardLancamentos";

type props = {
  descricao: string;
  valor: number
  total_parcelas: number;
  parcela_atual: number;
  tipo: 'entrada' | 'saida'
  repete_todos_meses: boolean;
  id: number
}

export const revalidate = 60

async function getLancamentos() {
  try {
    const response = await fetch(process.env.URL + '/api/lancamentos')
    const { ...lancamentos }: props[] = await response.json()
    return lancamentos

    console.log('??' + lancamentos)

  } catch (error) {
    console.log(error)
    return []
  }
}

async function Lancamentos() {

  const lancamentos = await getLancamentos()

  return (
    <div className="flex flex-col items-center gap-2 max-h-[60vh] overflow-auto p-6">

      {
        lancamentos.length > 0 && lancamentos?.map(lancamento => (

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
        lancamentos && !lancamentos[0] &&
        <span className="text-white">Sem lançamentos 😉</span>
      }

    </div>

  )
}

export default Lancamentos