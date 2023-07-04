'use client'
import { FiArrowDownCircle, FiArrowUpCircle, FiDollarSign } from "react-icons/fi"
import Card from "../card"

type totaisProps = {
  totais: {
    total_entrada: number,
    total_saida: number
    total: number
  }

}

function Totais({ totais }: totaisProps) {

  return (
    <div className="flex justify-around">
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