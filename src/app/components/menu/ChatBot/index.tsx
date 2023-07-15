'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea, ScrollAreaViewport } from "@radix-ui/react-scroll-area";
import { useEffect, useState } from "react";
import { useChat } from 'ai/react'
import { useSession } from "next-auth/react";
import Image from "next/image";
import robo from '../../../../../public/chat/robo.png'
import { ScrollBar } from "@/components/ui/scroll-area";

function ChatBot() {

  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const { data } = useSession()

  const scrollArea = document.querySelector('.scroll-area') as HTMLElement

  function scrollToBottom() {
    if (scrollArea) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: 'auto',
        block: 'end',
      };
      scrollArea.lastElementChild?.scrollIntoView(scrollOptions);
    }
  }


  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Sheet>
      <SheetTrigger className="text-white bg-gray-200/10 p-3 hover:bg-gray-200/20  rounded-lg font-bold ">
        Assistente Virtual 🤖
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full h-full  ">
        <SheetHeader>
          <SheetTitle>Peça ajuda da IA para suas finanças ! 🤖 </SheetTitle>
          <SheetDescription>
            Com base no seus lançamentos, você poder pedir dicas de como poupar,otimizar seus gastos e como melhorar
            sua saúde financeira ! 

          </SheetDescription>
        </SheetHeader>

        <div className=" h-full w-full border border-sky-500 bg-gray-50 rounded-md overflow-auto " >

          <ScrollArea className="w-full h-full scroll-area">
            <ScrollBar />
            {
              messages.map(message => (
                <div key={message.id} className='text-gray-800 p-4 '>
                  {
                    message.role == 'user' ?
                      <div className="flex gap-2 ">
                        <Image
                          src={data?.user?.image!}
                          alt='Avatar'
                          width='40'
                          height='40'
                        />

                        <p >
                          <span className="block font-bold">
                            {data?.user?.name}:
                          </span>{message.content}
                        </p>
                      </div>
                      :
                      <div className="flex flex-1 gap-2 ">
                        <Image
                          src={robo}
                          alt='Avatar'
                          className="w-10 h-10"
                        />

                        <p >
                          <span className="block font-bold">Assistente:
                          </span>{message.content}
                        </p>
                      </div>
                  }

                </div>
              ))
            }
          </ScrollArea>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex  mt-auto gap-2 ">
          <Input
            className="bg-gray-100"
            placeholder="Pergunte aqui..."
            value={input}
            onChange={handleInputChange}
          />

          <Button type='submit' className="w-30">Perguntar</Button>
        </form>

      </SheetContent>
    </Sheet>
  )
}

export default ChatBot