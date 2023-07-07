import { ReactElement } from "react";

type cardProps = {
  titulo: string
  Icone: ReactElement,
  valor?: number
}

function Card({ Icone, titulo, valor }: cardProps) {

  return (
    <div className="flex flex-col max-xl:h-auto p-4 text-center gap-6 max-sm:gap-2 w-72 max-sm:w-32 border-slate-900 shadow-md bg-white rounded-xl cursor-pointer">

      <div className="flex items-center justify-center gap-4">
        <h1 className="text-sm">{titulo}</h1>
        {Icone}
      </div>

      <p className="text-2xl max-sm:text-xl font-bold text-gray-800">R$ {valor}</p>

    </div>
  )

}

export default Card