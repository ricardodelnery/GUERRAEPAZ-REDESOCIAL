import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import UIProvider from './components/UIProvider'
import ReactQueryProvider from './providers/ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guerra & Paz - Plataforma de Análise Crítica',
  description: 'Soberania intelectual através da gamificação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ReactQueryProvider>
          <UIProvider>
            {children}
          </UIProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
