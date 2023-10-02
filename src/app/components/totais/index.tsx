import { getTotais } from "@/app/server/lancamentos/Lancamentos"
import { FiArrowDownCircle, FiArrowUpCircle, FiDollarSign } from "react-icons/fi"
import Card from "../card"

export const revalidate = 0

async function Totais() {

  const totais = await getTotais()

  return (
    <div className="text-black flex justify-evenly max-xl:flex-wrap gap-4 max-sm:gap-0">
      <Card
        titulo='Entrada'
        valor={totais?.total_entrada}
        Icone={<FiArrowDownCircle />}
      />

      <Card
        titulo="Saida"
        valor={totais?.total_saida}
        Icone={<FiArrowUpCircle />}
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