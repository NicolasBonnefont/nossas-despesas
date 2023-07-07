'use client'

import { lancamentos } from "@prisma/client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { FiArrowLeft } from "react-icons/fi"
import { BounceLoader } from "react-spinners"
import money from '../../../../public/novo-lancamento/money.png'
import PostLancamento from "../../server/lancamentos/postLancamento"

function NovoLancamento() {

  const { register, handleSubmit } = useForm<lancamentos>();

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const onSubmit: SubmitHandler<lancamentos> = async (data) => {

    setIsLoading(true)

    await PostLancamento(data)
      .then(response => {
        console.log(response)
        router.push('/dash/'+response)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })

  }

  return (

    <div className="flex flex-1 flex-col w-full h-full md:p-10 p-4 md:px-32 gap-8 text-white">

      <button
        onClick={() => router.back()}
        className=" flex items-center gap-2 hover:underline-1 hover:underline w-20"
      >
        <FiArrowLeft />voltar
      </button>

      <div className="flex flex-1 w-full h-full items-center justify-evenly max-sm:flex-col-reverse ">

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col max-w-2xl max-sm:w-full gap-2 ">
          <span>Descrição:</span>
          <input required {...register('descricao')} className="rounded-xl h-16 p-2 text-black" placeholder="Descrição..." />

          <span>Valor:</span>
          <input required {...register('valor', {
            valueAsNumber: true
          })} className="rounded-xl h-16 p-2 text-black" placeholder="Valor..." />

          {/*         <span>Parcelas:</span>
    <input required {...register('total_parcelas')} className="rounded-xl h-16 p-2 text-black" placeholder="Valor..." />
*/}
          {/*           <div className="flex w-full items-center gap-8 h-auto">
      <span>Repete todos os meses:</span>
      <input required {...register('repete_todos_meses')} type="checkbox" className="rounded-2xl h-8 p-2 text-black cursor-pointer" />
    </div>
*/}
          <span>Selecione o Tipo:</span>
          <select required {...register('tipo')} className="rounded-xl h-16 p-2 text-black cursor-pointer" placeholder="Selecione uma opção">
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


        <Image
          src={money}
          alt='Imagem representando dinhero'
          className="max-sm:w-[220px]"
        />

      </div>

    </div>

  )
}

export default NovoLancamento