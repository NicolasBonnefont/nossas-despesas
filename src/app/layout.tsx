import Head from 'next/head'
import Script from 'next/script'
import Provider from './components/Providers/Provider'
import './globals.css'

export const metadata = {
  title: 'Teu Money - Gestão Financeira Pessoal',
  description: 'Sistema simples de gestão de despesas pessoais.',
  keywords: "gestão financeira pessoal, gestão de gastos, controle de gastos pessoais, meu gastos, entrada e saida, sistema financeiro, controle de gastos"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1391481324251546"
     crossorigin="anonymous"/>
      </Head>
      <body className='font-Poppins flex flex-1 flex-col bg-gray-900 w-full h-screen '>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
