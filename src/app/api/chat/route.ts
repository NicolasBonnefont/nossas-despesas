import { getLancamentos, getTotais } from '@/app/server/lancamentos/Lancamentos'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export async function POST(req: Request) {

  try {
    let { messages } = await req.json()

    const lancamentos = await getLancamentos()
    const totais = await getTotais()

    let content = `voce é um assistente virtual financeiro. voce recebera lancamentos do sistema de controle de gestão onde vai conter as entradas e saidas que o usuário cadastrou. responda sempre de forma objetiva e sempre educado.`

    await Promise.all(
      lancamentos.map(lancamento => {
        if (lancamento.tipo == 'entrada') {
          content += `entrada: descricao: ${lancamento.descricao} valor: ${lancamento.valor} reais`
        } else {
          content += `saida: descricao: ${lancamento.descricao} valor: ${lancamento.valor} reais`
        }
      }
      )
    )
    content += ` total entradas: ${totais.total_entrada} reais`
    content += ` total saidas: ${totais.total_saida} reais`
    content += ` saldo de entradas - saidas: ${totais.total} reais`

    if (messages[0].role !== 'system') {
      messages = [
        { role: 'system', content },
        ...messages,
      ]
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages,
    })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
  } catch (error) {
    console.log(error)
  }

}