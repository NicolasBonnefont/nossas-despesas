'use client'

import { lancamentos } from "@prisma/client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { FiArrowLeft } from "react-icons/fi"
import { BounceLoader } from "react-spinners"
import money from '../../../../public/novo-lancamento/money.png'
import PostLancamento from "../../server/lancamentos/postLancamento"

function NovoLancamento() {

  const { register, handleSubmit, watch,  } = useForm<lancamentos>({
    defaultValues: {
      total_parcelas: 0
    }
  });

  const totalParcelas = watch("total_parcelas");

  const tipo_lancamento = watch("tipo");

  useEffect(() => {
    console.log(totalParcelas)
  }, [totalParcelas])

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const onSubmit: SubmitHandler<lancamentos> = async (data) => {

    setIsLoading(true)

    await PostLancamento(data)
      .then(response => {
        router.push('/dash')
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
          <input required {...register('descricao')} className="rounded-xl h-12 p-2 text-black" placeholder="Descrição..." maxLength={20} />

          <span>Selecione o Tipo:</span>
          <select required {...register('tipo')} className="rounded-xl h-12 p-2 text-black cursor-pointer" placeholder="Selecione uma opção">
            <option value="">Selecione uma opção</option>
            <option value="saida">Saida</option>
            <option value="entrada">Entrada</option>
          </select>

          <span>Valor:</span>
          <input required {...register('valor', {
            valueAsNumber: true
          })} className="rounded-xl h-12 p-2 text-black" placeholder="Valor..." type='number' />

          {
            tipo_lancamento == "saida" &&
            <>
              <span>Parcelas:</span>
              <input required minLength={0} min={0} {...register('total_parcelas', {
                valueAsNumber: true,
                min: 0
              })} type='number' className="rounded-xl h-12 p-2 text-black" placeholder="Valor..." />
            </>
          }

          {
            totalParcelas == 0 &&
            <label className="inline-flex items-center cursor-pointer my-4">
              <span className="mr-4 text-white">Repete todos os meses</span>
              <input {...register('repete_todos_meses')} disabled={totalParcelas > 0} type="checkbox" className="rounded cursor-pointer form-checkbox h-5 w-5 " />
            </label>
          }

          <button className="flex items-center justify-center rounded-xl h-12 bg-green-600 mt-8 font-bold">
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
          className="max-sm:w-[200px] w-[420px]"
          priority={true}
        />

      </div>

    </div>

  )
}

export default NovoLancamento