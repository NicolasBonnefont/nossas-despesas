import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Lancamentos from "@/app/components/lancamentos"
import Totais from "@/app/components/totais"
import { getServerSession } from "next-auth"
import ButtonNovoLancamento from "./ButtonNovoLancamento"

async function Logado() {

  const session = await getServerSession(authOptions)

  return (
    <>
      <div className="flex flex-1 w-full h-full justify-center my-auto 2xl:mt-20">

        <div className="flex flex-col  w-[1300px]">

          <Totais />

          <div className="flex justify-between items-center  text-white font-bold p-6 text-md">
            <p className="">Lançamento do mês:</p>
            <ButtonNovoLancamento />
          </div>

          <Lancamentos />

        </div>

      </div>
    </>

  )

}

export default Logado