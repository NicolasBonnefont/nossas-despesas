'use client'

import { lancamentos } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { FiArrowLeft } from "react-icons/fi"
import { BounceLoader } from "react-spinners"
import money from '../../../public/novo-lancamento/money.png'
import { EmailContexto } from "../components/Providers/EmailProvider"
import PostLancamento from "../server/lancamentos/postLancamento"

function NovoLancamento() {

  const { email } = useContext(EmailContexto)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<lancamentos>();

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const onSubmit: SubmitHandler<lancamentos> = async (data) => {

    setIsLoading(true)

    const dados = {
      ...data,
      email_cliente: email
    }

    await PostLancamento(dados)
      .then(response => {
        router.push('/')
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => {
        setIsLoading(false)
      })

  }

  return (

    <div className="flex flex-1 flex-col w-full h-full md:p-10 p-4 md:px-32 gap-8 text-white">

      <Link className=" flex items-center gap-2 hover:underline-1 hover:underline w-20" href="/">
        <FiArrowLeft />voltar
      </Link>

      <div className="flex flex-1 w-full h-full items-center justify-evenly">

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col max-w-2xl gap-2 ">
          <span>Descrição:</span>
          <input {...register('descricao')} className="rounded-xl h-16 p-2 text-black" placeholder="Descrição..." />

          <span>Valor:</span>
          <input {...register('valor', {
            valueAsNumber: true
          })} className="rounded-xl h-16 p-2 text-black" placeholder="Valor..." />

          <span>Parcelas:</span>
          <input {...register('total_parcelas')} className="rounded-xl h-16 p-2 text-black" placeholder="Valor..." />

          <div className="flex w-full items-center gap-8 h-auto">
            <span>Repete todos os meses:</span>
            <input {...register('repete_todos_meses')} type="checkbox" className="rounded-2xl h-8 p-2 text-black cursor-pointer" />
          </div>

          <span>Selecione o Tipo:</span>
          <select {...register('tipo')} className="rounded-xl h-16 p-2 text-black cursor-pointer" placeholder="Selecione uma opção">
            <option value="saida">Saida</option>
            <option value="entrada">Entrada</option>
          </select>

          <button className="flex items-center justify-center rounded-xl h-16 bg-green-600 mt-8 font-bold">
            {
              isLoading ?
                <BounceLoader color="white" size='16' />
                :
                'Salvar'
            }
          </button>

        </form>

        <div className="max-md:hidden">
          <Image
            src={money}
            alt='Imagem representando dinhero'
            width={450}
          />
        </div>
      </div>

    </div>

  )
}

export default NovoLancamento