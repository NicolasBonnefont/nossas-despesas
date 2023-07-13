import Image from "next/image"
import totais from '../../../../../public/landingpage/totais.png'
import lancamentos from '../../../../../public/landingpage/lancamentos.png'
import novoLancamento from '../../../../../public/landingpage/novo-lancamento.png'

function Funcionalidades() {
  return (

    <div id='funcionalidades' className="flex flex-col gap-32 items-center justify-center bg-gray-950 w-full min-h-[650px] h-auto px-32 py-20">

      <div className="flex flex-col gap-10 items-center justify-center mb-10">
        <h1 className=" text-white text-6xl">
          Veja os totais das suas entradas e saidas !
        </h1>

        <Image
          src={totais}
          alt='Representa uma das funcionalidades do sistema que é ter os totais de entrada e saida'
          priority
          className="rounded-lg"
        />
      </div>

      <div className="flex gap-10 items-center justify-center">
        <h1 className=" text-white text-6xl">
          Acompanha todos os lançamentos previstos no mês! 😎
        </h1>
        <Image
          src={lancamentos}
          alt='Representa uma das funcionalidades do sistema que é ter os totais de entrada e saida'
          priority
          className="rounded-lg"
          width='950'
        />
      </div>

      <div className="flex gap-10 items-center justify-center">
        <Image
          src={novoLancamento}
          alt='Representa uma das funcionalidades do sistema que é ter os totais de entrada e saida'
          priority
          className="rounded-lg"
          width='950'
        />
        <h1 className=" text-white text-6xl">
         Realize lançamentos das duas contas parceladas! 👌
        </h1>
      </div>

    </div>

  )
}

export default Funcionalidades