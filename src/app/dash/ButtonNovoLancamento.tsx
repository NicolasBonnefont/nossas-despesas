'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription, DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { lancamentos } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BounceLoader } from "react-spinners";
import { getUmLancamento } from "../server/lancamentos/Lancamentos";
import { PostLancamento, UpdateLancamentos } from "../server/lancamentos/postLancamento";

export default function ButtonNovoLancamento() {

  const router = useRouter()
  const path = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [loading, setLoadgin] = useState(false)

  const defaultValues = {
    total_parcelas: 0
  }

  const { register, handleSubmit, watch, reset, resetField } = useForm<lancamentos>({
    defaultValues
  });

  const totalParcelas = watch("total_parcelas");

  const tipo_lancamento = watch("tipo");

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<lancamentos> = async (data) => {

    setIsLoading(true)

    if (isEdit) {

      await UpdateLancamentos(data)
        .then(response => {
          chanegStateModal()
        })
        .catch(error => {
          console.log(error)
          setIsLoading(false)
        })

    } else {

      await PostLancamento(data)
        .then(response => {
          chanegStateModal()
        })
        .catch(error => {
          console.log(error)
          setIsLoading(false)
        })
    }
  }

  function OpenAndReset() {
    reset(defaultValues)
    setIsLoading(false)
    setIsOpen(true)
    setIsEdit(false)
  }

  function chanegStateModal(open: boolean) {
    setIsOpen(open)

    if (!open) {
      reset(defaultValues)
      setIsLoading(false)
      setLoadgin(false)
      router.refresh()
      router.push('/dash')
    }

  }

  async function igualaLancamento(id: number) {

    setLoadgin(true)

    const busca_lancamento = await getUmLancamento(id)

    if (!busca_lancamento) {
      chanegStateModal(false)
      return
    }

    if (busca_lancamento) {
      reset({
        ...busca_lancamento
      })
    }

    setLoadgin(false)

  }

  useEffect(() => {

    const search = path.get('editar')
    const id = path.get('id')

    if (search == 'true') {
      setIsOpen(true)
      setIsEdit(true)
    } else {
      setIsEdit(false)
    }

    if (id !== '' && id) {
      igualaLancamento(Number(id))
    }

  }, [path])


  return (
    <Dialog open={isOpen} onOpenChange={chanegStateModal} >
      <DialogTrigger asChild >
        <button onClick={OpenAndReset} className='bg-green-800 hover:bg-green-700 p-3 rounded-lg font-medium text-sm'>Novo Lançamento</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white" >
        <DialogHeader>
          <DialogTitle>Novo Lançamento</DialogTitle>
          <DialogDescription className="text-white">
            Informe os dados do seu novo lançamento.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-1 flex-col w-full h-full md:p-10 p-4 md:px-32 gap-8 text-white">

          <div className="flex flex-1 w-full h-full items-center justify-evenly max-sm:flex-col-reverse ">

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col max-w-2xl max-sm:w-full gap-2 ">
              <span>Descrição:</span>
              <input required {...register('descricao')} className="bg-white rounded-xl h-12 p-2 text-black" placeholder="Descrição..." maxLength={20} />

              <span>Selecione o Tipo:</span>
              <select required {...register('tipo')} className="bg-white rounded-xl h-12 p-2 text-black cursor-pointer" placeholder="Selecione uma opção">
                <option value="">Selecione uma opção</option>
                <option value="saida">Saida</option>
                <option value="entrada">Entrada</option>
              </select>

              <span>Valor:</span>
              <input required {...register('valor', {
                valueAsNumber: true
              })} className="bg-white rounded-xl h-12 p-2 text-black" placeholder="Valor..." type='number' />

              {
                tipo_lancamento == "saida" &&
                <>
                  <span>Parcelas:</span>
                  <input required minLength={0} min={0} {...register('total_parcelas', {
                    valueAsNumber: true,
                    min: 0
                  })} type='number' className="bg-white rounded-xl h-12 p-2 text-black" placeholder="Valor..." />
                </>
              }

              {
                totalParcelas == 0 &&
                <label className="inline-flex items-center cursor-pointer my-4">
                  <span className="mr-4 text-white">Repete todos os meses</span>
                  <input {...register('repete_todos_meses')} disabled={totalParcelas > 0} type="checkbox" className="bg-white rounded cursor-pointer form-checkbox h-5 w-5 " />
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

          </div>

        </div>

        {/*         <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
