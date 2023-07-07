
import { redirect } from "next/navigation"

async function Home() {

  redirect('/login')

  return <></>
}
export default Home