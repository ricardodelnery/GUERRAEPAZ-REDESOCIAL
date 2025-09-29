import { UiProvider } from './context/UiContext'
import Header from './components/Header'
import Footer from './components/Footer'
import { BottomTabBar } from './components/BottomTabBar'
import { SearchSheet } from './components/SearchSheet'
import { NotifDrawer } from './components/NotifDrawer'
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
          {/* HEADER ÚNICO - Shell Global */}
          <Header />
          
          {/* CONTEÚDO PRINCIPAL */}
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
          
          {/* FOOTER ÚNICO - Shell Global */}
          <Footer />
          
          {/* TABBAR MOBILE - Shell Global */}
          <BottomTabBar />
          
          {/* MODAIS GLOBAIS - Shell Global */}
          <SearchSheet />
          <NotifDrawer />
        </UiProvider>
      </body>
    </html>
  )
}
