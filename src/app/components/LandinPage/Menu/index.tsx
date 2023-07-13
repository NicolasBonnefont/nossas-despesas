import Image from "next/image"
import Link from "next/link"
import money from '../../../../../public/novo-lancamento/money.png'
import { FiAlignJustify } from "react-icons/fi"

function Menu() {
  return (
    <div className="flex w-full justify-between items-center h-20 bg-gray-950 shadow-2xl text-white px-32 max-sm:px-10 fixed top-0">

      <a href="#hero">

        <div className="flex items-center gap-2 cursor-pointer">
          <p className="font-extrabold text-xl">TeuMoney</p>
          <Image
            src={money}
            alt='logo'
            width={46}
            priority
          />
        </div>

      </a>

      <div className=" flex gap-6 max-md:hidden">
        <a href="#funcionalidades"><p className=" underline-offset-2 hover:underline cursor-pointer">Funcionalidades</p></a>
        <p className=" underline-offset-2 hover:underline cursor-pointer">Preços</p>
        <p className=" underline-offset-2 hover:underline cursor-pointer">Contado</p>
      </div>

      <Link href='/login' className="max-md:hidden">
        <p className="font-light underline-offset-2 underline cursor-pointer">Login</p>
      </Link>

      <FiAlignJustify size='24' className="cursor-pointer md:hidden" />

    </div>
  )
}

export default Menu