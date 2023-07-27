import Image from "next/image"
import Link from "next/link"
import hero from '../../../../../public/landingpage/hero.png'

function Hero() {
  return (
    <div id='hero' className="flex flex-1 w-full h-screen items-center justify-center pt-20 ">

      <div className="flex  w-full gap-4 items-center justify-between px-32 max-md:px-12">

        <div className="flex flex-col gap-8 max-w-[850px] ">
          <h1 className="text-6xl max-2xl:text-4xl max-xl:text-4xl max-md:text-2xl max-sm:text-3xl text-[#BCE3A6] font-extrabold ">
            Organize suas despesas de forma prática e sem dificuldades !
          </h1>
          <Link href='/login' prefetch className="flex items-center justify-center text-white text-2xl font-bold w-full bg-[#DF8722] hover:bg-[#df8722e0] h-16 rounded-md">
            COMEÇAR AGORA
          </Link>
        </div>
        
        <Image
          src={hero}
          alt='Hero image'
          className="w-[650px] max-2xl:w-[450px] max-xl:w-[400px] max-md:hidden"
          priority={true}          
        />

      </div>

    </div>
  )
}

export default Hero