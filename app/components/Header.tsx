'use client'

import { BrandMarkOfficial } from './BrandLogo'

export function Header({ onOpenSearch, onOpenNotif }: { onOpenSearch: () => void; onOpenNotif: () => void }) {
  return (
    <header className="bg-white sticky top-0 z-50 border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          <BrandMarkOfficial />
        </div>
        <div className="flex items-center gap-1">
          <button aria-label="Buscar" className="p-2 rounded-full hover:bg-gray-100" onClick={onOpenSearch}>🔎</button>
          <button aria-label="Notificações" className="relative p-2 rounded-full hover:bg-gray-100" onClick={onOpenNotif}>
            🔔
            <span className="absolute -top-1 -right-1 text-[10px] bg-red-600 text-white rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </button>
          <button className="bg-red-600 text-white font-semibold py-1.5 px-3 rounded-lg text-sm">Entrar</button>
        </div>
      </div>
      <nav aria-label="Navegação secundária" className="hidden md:block bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 py-2 text-sm">
          <a className="text-red-600 font-medium" href="#">Feed</a>
          <a className="text-gray-600 hover:text-red-600" href="#">Explorar</a>
          <a className="text-gray-600 hover:text-red-600" href="#">Mapa</a>
          <a className="text-gray-600 hover:text-red-600" href="#">Cinemateca</a>
          <a className="text-gray-600 hover:text-red-600" href="#">Academia</a>
          <a className="ml-auto text-gray-600 hover:text-red-600" href="#">Loja</a>
        </div>
      </nav>
    </header>
  )
}
