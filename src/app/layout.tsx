import Menu from './components/menu'
import './globals.css'

export const metadata = {
  title: 'Minhas Despesas',
  description: 'Sistema de gestão de Gastos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className=' font-Poppins flex flex-1 flex-col bg-gray-900 w-full h-screen '>
        <Menu />
        {children}
      </body>
    </html>
  )
}
