'use client'

import { useState } from "react"
import { FiAlignJustify } from "react-icons/fi"
import MenuMobile from "./MenuMobile"


function HamburguerMenu() {

  const [showMenuMobile, setShowMenuMobile] = useState(false)

  return (
    <>
      <FiAlignJustify size='24' className="cursor-pointer md:hidden mr-10" onClick={() => setShowMenuMobile(true)} />

      {
        showMenuMobile &&
        <MenuMobile
          setShowMenuMobile={setShowMenuMobile}
        />
      }

    </>
  )

}

export default HamburguerMenu