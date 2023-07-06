import { getServerSession } from "next-auth";
import Image from "next/image";
import BtnDeslogar from "./BtnDeslogar";
import BtnLogar from "./BtnLogar";

async function Menu() {

  const data = await getServerSession()

  return (
    <menu className="flex  w-full h-28 px-32 ">
      {

        data?.user?.email ?

          <div className="flex-1 flex items-center justify-between text-end text-white text-md ">
            <div className="flex items-center gap-4">
              <Image
                src={data!.user!.image!}
                alt='Image paerfil'
                width={45}
                height={45}
                className='rounded-lg'
              />
              <span>{data?.user?.name}</span>

            </div>
            <BtnDeslogar />
          </div>

          :
          <div className="flex-1 flex items-center justify-end text-end text-white text-md ">
            <BtnLogar />
          </div>
      }

    </menu>
  )

}

export default Menu