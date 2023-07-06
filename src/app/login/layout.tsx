
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className='font-Poppins flex flex-1 flex-col bg-gray-900 w-full h-screen '>
        {children}
      </body>
    </html>
  )
}
