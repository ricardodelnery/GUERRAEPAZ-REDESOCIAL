'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomTabBar() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  const tabs = [
    { id: 'feed', label: 'Feed', icon: '🏠', path: '/' },
    { id: 'explorar', label: 'Explorar', icon: '🔎', path: '/explorar' },
    { id: 'mapa', label: 'Mapa', icon: '🗺️', path: '/mapa' },
    { id: 'cine', label: 'Cine', icon: '🎬', path: '/cine' },
    { id: 'perfil', label: 'Perfil', icon: '👤', path: '/perfil' }
  ]

  const TabItem = ({ tab }: { tab: typeof tabs[0] }) => (
    <Link
      href={tab.path}
      className={`flex flex-col items-center justify-center flex-1 py-2 transition-colors ${
        isActive(tab.path) ? 'text-red-600' : 'text-gray-500'
      }`}
      aria-current={isActive(tab.path) ? 'page' : undefined}
    >
      <span className="text-lg" aria-hidden>{tab.icon}</span>
      <span className="text-[11px] leading-none mt-1">{tab.label}</span>
    </Link>
  )

  return (
    <nav 
      aria-label="Navegação principal" 
      className="fixed bottom-0 left-0 right-0 bg-white border-t z-50 md:hidden shadow-lg"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-5">
        {tabs.map((tab) => (
          <TabItem key={tab.id} tab={tab} />
        ))}
      </div>
    </nav>
  )
}
