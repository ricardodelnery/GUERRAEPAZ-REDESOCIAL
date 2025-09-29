'use client'

export function BottomTabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t z-50 md:hidden" 
         style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-5">
        <button className="flex flex-col items-center justify-center flex-1 py-2 text-red-600">
          <span className="text-lg">🏠</span>
          <span className="text-[11px] leading-none">Feed</span>
        </button>
        <button className="flex flex-col items-center justify-center flex-1 py-2 text-gray-500">
          <span className="text-lg">🔎</span>
          <span className="text-[11px] leading-none">Explorar</span>
        </button>
        <button className="flex flex-col items-center justify-center flex-1 py-2 text-gray-500">
          <span className="text-lg">🗺️</span>
          <span className="text-[11px] leading-none">Mapa</span>
        </button>
        <button className="flex flex-col items-center justify-center flex-1 py-2 text-gray-500">
          <span className="text-lg">🎬</span>
          <span className="text-[11px] leading-none">Cine</span>
        </button>
        <button className="flex flex-col items-center justify-center flex-1 py-2 text-gray-500">
          <span className="text-lg">👤</span>
          <span className="text-[11px] leading-none">Perfil</span>
        </button>
      </div>
    </nav>
  )
}
