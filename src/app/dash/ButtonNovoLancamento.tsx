'use client'

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription, DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { lancamentos } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BounceLoader } from "react-spinners";
import PostLancamento from "../server/lancamentos/postLancamento";

export default function ButtonNovoLancamento() {

  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, watch, reset } = useForm<lancamentos>({
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

  const onSubmit: SubmitHandler<lancamentos> = async (data) => {

    setIsLoading(true)

    await PostLancamento(data)
      .then(response => {
        setIsOpen(false)
        router.refresh()
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
  }

  function OpenAndReset() {
    reset()
    setIsLoading(false)
    setIsOpen(true)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={OpenAndReset} className="bg-green-700" variant="outline" >Novo Lançamento</Button>
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

          </div>

        </div>

        {/*         <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
