import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guerra & Paz - Plataforma de Análise Crítica',
  description: 'Soberania intelectual através da análise crítica de informação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  )
}
