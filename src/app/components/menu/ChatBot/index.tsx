'use client'
import { ScrollBar } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useChat } from 'ai/react';
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import robo from '../../../../../public/chat/robo.png';

function ChatBot() {

  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const { data } = useSession()

  useEffect(() => {
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
    scrollToBottom();
  }, [messages]);

  return (
    <Sheet >
      <SheetTrigger className="text-white bg-gray-200/10 p-3 hover:bg-gray-200/20  rounded-lg font-bold ">
        Assistente Virtual 🤖
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full h-full  ">
        <SheetHeader>
          <SheetTitle>Peça ajuda da IA para suas finanças ! 🤖 </SheetTitle>
          <p className="text-white/70 font-light text-start">
            Com base nos seus lançamentos, você pode pedir dicas de como poupar,
            otimizar seus gastos e como melhorar sua saúde financeira! Pergunte seu
            saldo ou peça alguma dica referente aos seus lançamentos! Fique à vontade. 😉
          </p>
        </SheetHeader>

        {
          <div className=" h-full max-sm:h-auto w-full border border-sky-500 rounded-md overflow-auto " >
            <ScrollArea className="w-full h-full scroll-area">
              <ScrollBar />
              {
                messages.map(message => (
                  <div key={message.id} className='text-gray-200 p-4 '>
                    {
                      message.role == 'user' ?
                        <div className="flex gap-2 ">
                          <Image
                            src={data?.user?.image!}
                            alt='Avatar'
                            width='40'
                            height='40'
                            className="w-10 h-10 rounded-md"
                          />
                          <p >
                            <span className="block font-bold">
                              {data?.user?.name}:
                            </span>
                            {message.content}
                          </p>
                        </div>
                        :
                        <div className="flex flex-1 gap-2 ">
                          <Image
                            src={robo}
                            alt='Avatar'
                            className="w-10 h-10 rounded-md"
                          />
                          <p >
                            <span className="block font-bold">Assistente:
                            </span>
                            {message.content}
                          </p>
                        </div>
                    }

                  </div>
                ))
              }
            </ScrollArea>
          </div>
        }

        <form
          onSubmit={handleSubmit}
          className="flex gap-2 mt-2 ">
          <input
            className="bg-gray-100 rounded-md p-2 text-black w-full"
            placeholder="Pergunte aqui..."
            value={input}
            onChange={handleInputChange}
            autoFocus={false}
          />
          <button type='submit' className="w-30 h-12 p-2 rounded-md bg-gray-800 hover:bg-gray-900" >
            Perguntar
          </button>
        </form>

      </SheetContent>
    </Sheet>
  )
}

export default ChatBot