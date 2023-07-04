import Link from "next/link"
import { FiArrowDownCircle, FiArrowUpCircle, FiDollarSign, FiPlusCircle } from "react-icons/fi"
import Card from "./components/card"
import CardLancamentos from "./components/card-lancamentos/CardLancamentos"

function Home() {
  return (

    <div className="flex flex-1 flex-col w-full h-full p-10 px-32 gap-4">

      <div className="flex justify-around">
        <Card
          titulo="Entrada"
          valor="8000,00"
          Icone={<FiArrowUpCircle />}
        />

        <Card
          titulo="Saida"
          valor="2000,00"
          Icone={<FiArrowDownCircle />}
        />

        <Card
          titulo="Saldo"
          valor="6000,00"
          Icone={<FiDollarSign />}
        />

      </div>

      <div className="flex justify-between items-center  text-white font-bold p-6">
        <p className="">Lançamento do mês:</p>

        <Link href="/novo-lancamento" className=" flex items-center gap-2 p-4  text-black  rounded-lg shadow-md bg-white hover:bg-gray-100">
          Novo Lançamento

          <FiPlusCircle />
        </Link>

      </div>

      <div className="flex flex-col gap-2 max-h-[40vh] overflow-auto p-6">
        <CardLancamentos
          descricao="Gasolina"
          valor="150"
          tipo='saida'
        />

        <CardLancamentos
          descricao="Internet"
          valor="80"
          tipo='saida'
        />

        <CardLancamentos
          descricao="Internet Viviane"
          valor="80"
          tipo='entrada'
        />

        <CardLancamentos
          descricao="Mercado"
          valor="300"
          tipo='saida'
        />

        <CardLancamentos
          descricao="Ifood"
          valor="150"
          tipo='saida'
        />
        <CardLancamentos
          descricao="Internet Viviane"
          valor="80"
          tipo='entrada'
        />

        <CardLancamentos
          descricao="Mercado"
          valor="300"
          tipo='saida'
        />

        <CardLancamentos
          descricao="Ifood"
          valor="150"
          tipo='saida'
        />
      </div>

    </div>
  )
}

export default Home