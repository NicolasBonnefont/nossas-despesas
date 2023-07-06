
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "./api/auth/[...nextauth]/route"

async function Home() {

  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dash/' + session.user?.email)
  } else {
    redirect('/login')
  }

  return null
}
export default Home