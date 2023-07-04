import { ReactElement } from "react";

type cardProps = {
  titulo: string
  Icone: ReactElement,
  valor?: number
}

function Card({ Icone, titulo, valor }: cardProps) {


  return (
    <div className="flex flex-col h-48 p-6 text-center gap-10 w-72 border-slate-900 shadow-md bg-white rounded-xl cursor-pointer">

      <div className="flex items-center justify-center gap-4">
        <h1 className="">{titulo}</h1>
        {Icone}
      </div>

      <p className="text-3xl font-bold text-gray-800">R$ {valor}</p>

    </div>
  )

}

export default Card