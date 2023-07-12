import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import BtnDeslogar from "./BtnDeslogar";
import BtnLogar from "./BtnLogar";

async function Menu() {
  const data = await getServerSession(authOptions)


/*   console.log(data)

  if (!data) {
    redirect('/login')
  } */

  return (
    <menu className="flex  w-full h-28 px-32 max-sm:px-10 ">
      {

        data ?

          <div className="flex-1 flex items-center justify-between text-end text-white text-md ">
            <div className="flex items-center gap-4">
              <Image
                src={data!.user!.image!}
                alt='Image paerfil'
                width={45}
                height={45}
                className='rounded-lg'
              />
              <span className="max-sm:hidden">
                {data?.user?.name}
              </span>

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