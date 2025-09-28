import BrandMarkOfficial from './BrandMarkOfficial'

export default function Header({ onOpenSearch, onOpenNotif }: { 
  onOpenSearch: () => void; 
  onOpenNotif: () => void 
}) {
  return (
    <header className="bg-white sticky top-0 z-50 border-b">
      {/* Header principal */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Marca */}
        <div className="flex items-center gap-3">
          <BrandMarkOfficial />
        </div>

        {/* Ações */}
        <div className="flex items-center gap-1">
          <button 
            aria-label="Buscar" 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={onOpenSearch}
          >
            <span className="text-lg">🔍</span>
          </button>
          <button 
            aria-label="Notificações" 
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={onOpenNotif}
          >
            <span className="text-lg">🔔</span>
            <span className="absolute -top-1 -right-1 text-[10px] bg-red-600 text-white rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="bg-red-600 text-white font-semibold py-1.5 px-3 rounded-lg text-sm hover:bg-red-700 transition-colors">
            Entrar
          </button>
        </div>
      </div>

      {/* Navegação secundária (desktop) */}
      <nav aria-label="Navegação secundária" className="hidden md:block bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 py-2 text-sm">
          <a className="text-red-600 font-medium border-b-2 border-red-600 pb-1" href="#">
            Feed
          </a>
          <a className="text-gray-600 hover:text-red-600 transition-colors" href="#">
            Explorar
          </a>
          <a className="text-gray-600 hover:text-red-600 transition-colors" href="#">
            Mapa
          </a>
          <a className="text-gray-600 hover:text-red-600 transition-colors" href="#">
            Cinemateca
          </a>
          <a className="text-gray-600 hover:text-red-600 transition-colors" href="#">
            Academia
          </a>
          <a className="ml-auto text-gray-600 hover:text-red-600 transition-colors" href="#">
            Loja
          </a>
        </div>
      </nav>
    </header>
  )
}
