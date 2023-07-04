import { FiArrowRight } from "react-icons/fi"

function Menu() {

  return (
    <menu className="flex  w-full h-28 px-32 ">

      <div className="flex-1 flex items-center justify-end  text-end text-white text-md ">
        <button className="hover:underline hover:underline-1">
          <span>Login</span>
        </button>
        <FiArrowRight />
      </div>

    </menu>
  )

}

export default Menu