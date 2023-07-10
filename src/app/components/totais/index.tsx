import { FiArrowDownCircle, FiArrowUpCircle, FiDollarSign } from "react-icons/fi"
import Card from "../card"

type totaisProps = {
  total_entrada: number,
  total_saida: number
  total: number
}
export const revalidate = 30

async function getTotais() {
  const response = await fetch(process.env.URL + '/api/lancamentos/totais', { next: { revalidate } })
  const { ...totais }: totaisProps = await response.json()
  return totais
}

async function Totais() {

  const totais = await getTotais()

  return (
    <div className="flex justify-evenly max-xl:flex-wrap gap-4 max-sm:gap-0">
      <Card
        titulo='Entrada'
        valor={totais?.total_entrada}
        Icone={<FiArrowUpCircle />}
      />

      <Card
        titulo="Saida"
        valor={totais?.total_saida}
        Icone={<FiArrowDownCircle />}
      />

      <Card
        titulo="Saldo"
        valor={totais?.total}
        Icone={<FiDollarSign />}
      />

    </div>
  )

}

export default Totais