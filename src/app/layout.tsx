import Menu from './components/menu'
import Provider from './components/Providers/Provider'
import './globals.css'

export const metadata = {
  title: 'Minhas Despesas',
  description: 'Sistema de gestão de Despesas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className='font-Poppins flex flex-1 flex-col bg-gray-900 w-full h-screen '>
        <Provider>
          <Menu />
          {children}
        </Provider>
      </body>
    </html>
  )
}
