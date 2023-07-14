
import Image from "next/image"
import Link from "next/link"
import hero from '../../public/landingpage/hero.png'
import Footer from "./components/LandinPage/Footer/indes"
import Funcionalidades from "./components/LandinPage/Funcionalidades"
import Hero from "./components/LandinPage/Hero"
import Menu from "./components/LandinPage/Menu"
import Precos from "./components/LandinPage/Precos"


async function Home() {

  return (
    <div className="w-full min-h-screen bg-gray-950 ">

      <Menu />
 
      <Hero />

      <Funcionalidades /> 

      <Precos/>

      <Footer />

    </div>
  )
}
export default Home