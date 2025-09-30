import { UiProvider } from './context/UiContext'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        <UiProvider>
          {children}
        </UiProvider>
      </body>
    </html>
  )
}
