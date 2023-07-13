import Link from "next/link"


function Footer() {
  return (
    <div className="flex flex-col w-full h-32 items-center justify-center text-sm text-white bg-white/5">

      <p className="text-white text-sm">
        Feito por:
        <span className="hover:underline underline-offset-2">
          <Link target='_blank' href='https://www.linkedin.com/in/nicolasbonnefont/'> Nicolas Bonnefont 😍
          </Link>
        </span>
      </p>


      <p>&copy; {new Date().getFullYear()}</p>

    </div>
  )

}

export default Footer