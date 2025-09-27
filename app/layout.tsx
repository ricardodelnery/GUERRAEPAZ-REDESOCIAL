import { ReactNode } from "react"
import "./globals.css"

export const metadata = {
  title: "Guerra & Paz",
  description: "Plataforma de soberania intelectual",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}
