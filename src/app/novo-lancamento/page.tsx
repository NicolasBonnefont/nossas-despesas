import Image from "next/image"
import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"
import money from '../../../public/novo-lancamento/money.png'

function NovoLancamento() {
  return (

    <div className="flex flex-1 flex-col w-full h-full p-10 px-32 gap-8 text-white">

      <Link className=" flex items-center gap-2 hover:underline-1 hover:underline w-20" href="/"><FiArrowLeft /> voltar</Link>

      <div className="flex flex-1 w-full h-full items-center justify-evenly">

        <form className="flex flex-1 flex-col max-w-2xl gap-2 ">
          <span>Descrição:</span>
          <input className="rounded-xl h-16 p-2 text-black" placeholder="Descrição..." />

          <span>Valor:</span>
          <input className="rounded-xl h-16 p-2 text-black" placeholder="Valor..." />

          <span>Parcelas:</span>
          <input className="rounded-xl h-16 p-2 text-black" placeholder="Valor..." />

          <span>Selecione o Tipo:</span>
          <select className="rounded-xl h-16 p-2 text-black cursor-pointer" placeholder="Selecione uma opção">
            <option value="saida">Saida</option>
            <option value="entrada">Entrada</option>
          </select>

          <button className="rounded-xl h-16 bg-green-600 mt-8 font-bold">
            Salvar
          </button>

        </form>

        <Image
          src={money}
          alt='Imagem representando dinhero'
          width={450}
        />
      </div>

    </div>

  )
}

export default NovoLancamento