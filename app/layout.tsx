import { UiProvider } from './context/UiContext'
import HeaderWrapper from './components/HeaderWrapper'
import Footer from './components/Footer'
import { BottomTabBar } from './components/BottomTabBar'
import SearchSheet from './components/SearchSheet'
import NotifDrawer from './components/NotifDrawer'
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
          <HeaderWrapper />
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
          <Footer />
          <BottomTabBar active="feed" setActive={() => {}} />
          <SearchSheet open={false} onClose={() => {}} />
          <NotifDrawer open={false} onClose={() => {}} />
        </UiProvider>
      </body>
    </html>
  )
}
