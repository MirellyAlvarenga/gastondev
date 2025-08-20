import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar' 
import { Providers } from './providers' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
title: 'Mirelly Alvarenga - Portfolio',
description: 'Portfólio de Engenharia de Software de Mirelly Alvarenga', 
icons: {
  icon: '/'
}
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
  <html lang="pt-BR" suppressHydrationWarning> 
    <body className={`${inter.className} bg-black text-white`}>  
        <Providers>
          <NavBar />
          <main className='pt-2'>
          {children}
          </main>
        </Providers>
    </body>
  </html>
)
}