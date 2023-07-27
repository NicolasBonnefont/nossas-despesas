import Link from "next/link"

function Precos() {
  return (

    <div id='preco' className="text-black flex flex-1 items-center justify-center w-full min-h-[60%] gap-8 max-md:flex-wrap py-24 bg-gray-900">
      <Link href="/login">
        <div className="flex flex-col bg-white rounded-xl shadow-lg w-80  min-h-[500px] hover:bg-gray-200 cursor-pointer  " >

          <div className=" flex items-center justify-center w-full h-10 bg-blue-900 rounded-b-xl rounded-t-lg">
            <p className="text-yellow-200 font-bold">Uso Básico</p>
          </div>

          <div className=" mt-14 flex flex-col gap-1 items-center justify-center">
            <h1 className=" font-bold text-2xl">FREE</h1>
            <p className="font-light">RS 0.00</p>
          </div>

          <ul className="my-auto flex flex-col gap-8  font-medium  text-center p-2">
            <li>
              Máximo de 10 entradas
            </li>
            <li>
              Máximo de 10 saídas
            </li>
            <li>
              Sem inteligência artificial
            </li>
            <li>
              Sem relatório
            </li>
          </ul>

        </div>
      </Link>

      <a href="https://buy.stripe.com/eVa3g9dNIdkjguc5km">
        <div className=" flex flex-col bg-white rounded-xl shadow-lg w-80  min-h-[500px] hover:bg-gray-200 cursor-pointer" >

          <div className=" flex items-center justify-center w-full h-10 bg-blue-900 rounded-b-xl rounded-t-lg">
            <p className="text-yellow-200 font-bold">Melhor Experiência</p>
          </div>

          <div className=" mt-14 flex flex-col gap-1 items-center justify-center">
            <h1 className=" font-bold text-2xl">PRO</h1>
            <p className="font-light">RS 29,90</p>
          </div>

          <ul className="my-auto flex flex-col gap-8  font-medium text-center p-2">
            <li>
              Entradas ilimitadas !
            </li>
            <li>
              Saídas ilimitadas !
            </li>
            <li>
              Ajuda do Assistente Virtual com seus gasto 🤖
            </li>
            <li>
              Relatórios mensais com base no seus gastos e dicas do Assitente virutal 🤖
            </li>
          </ul>

        </div>

      </a>

    </div>

  )
}

export default Precos