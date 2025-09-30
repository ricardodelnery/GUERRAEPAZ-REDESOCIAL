'use client'

export function HeaderCompleto({ onOpenSearch, onOpenNotif }: { 
  onOpenSearch: () => void; 
  onOpenNotif: () => void 
}) {
  return (
    <header className="bg-white sticky top-0 z-50 border-b shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <span className="text-xl font-black text-black">GUERRA</span>
<            <span className="text-xl font-black text-red-600 ml-2">PAZ</span>
          </div>
        </div>
        
        {/* Ações */}
        <div className="flex items-center gap-2">
          <button 
            aria-label="Buscar" 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={onOpenSearch}
          >
            🔍
          </button>
          <button 
            aria-label="Notificações" 
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={onOpenNotif}
          >
            ��
            <span className="absolute -top-1 -right-1 text-[10px] bg-red-600 text-white rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="bg-red-600 text-white font-semibold py-1.5 px-4 rounded-lg text-sm hover:bg-red-700 transition-colors">
            Entrar
          </button>
        </div>
      </div>
    </header>
  )
}
