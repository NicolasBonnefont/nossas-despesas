import { Dispatch, SetStateAction } from "react"
import { FiXCircle } from "react-icons/fi"

type menuMobileProps = {
  setShowMenuMobile: Dispatch<SetStateAction<boolean>>
}

function MenuMobile({ setShowMenuMobile }: menuMobileProps) {
  return (
    <div className="z-0 flex flex-1 flex-col w-full h-screen  top-1 fixed bg-gray-950 px-10 py-5 ">

      <FiXCircle
        size='22'
        className="cursor-pointer text-white ml-auto"
        onClick={() => setShowMenuMobile(false)}
        color='red'
      />

      <div className="flex flex-1 flex-col items-center justify-around">
        <a onClick={() => setShowMenuMobile(false)} href="#hero">
          <p className="font-bold text-2xl underline underline-offset-2 text-white">Inicio</p>
        </a>

        <a onClick={() => setShowMenuMobile(false)} href="#funcionalidades">
          <p className="font-bold text-2xl underline underline-offset-2 text-white">Funcionalidades</p>
        </a>

        <a onClick={() => setShowMenuMobile(false)} href="#preco">
          <p className="font-bold text-2xl underline underline-offset-2 text-white">Preço</p>
        </a>

        <a onClick={() => setShowMenuMobile(false)} href="#contato">
          <p className="font-bold text-2xl underline underline-offset-2 text-white">Contato</p>
        </a>
      </div>

    </div>
  )
}

export default MenuMobile