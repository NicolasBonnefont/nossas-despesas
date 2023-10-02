import Lancamentos from "@/app/components/lancamentos"
import Totais from "@/app/components/totais"
import ButtonNovoLancamento from "./ButtonNovoLancamento"

async function Logado() {

  return (
    <>
      <div className="flex flex-1 w-full h-full justify-center my-auto 2xl:mt-20">

        <div className="flex flex-col  w-[1300px]">

          <Totais />

          <div className="flex justify-between items-center  text-white font-bold p-6 text-md">
            <p className="">Lançamentos do mês:</p>
            <ButtonNovoLancamento />
          </div>

          <Lancamentos />

        </div>

      </div>
    </>

  )

}

export default Logado