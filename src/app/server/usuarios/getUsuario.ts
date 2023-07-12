import prisma from "@/db/prisma"

async function GetUsuario(email: string){
  try {



    if(!email || email==''){
      throw 'Email é necessário !'
    }

    const busca_usuario = await prisma.usuario.findFirst({
      where:{
        email
      }
    })

    return busca_usuario
    
  } catch (error) {
    return error
  }
}

export default GetUsuario