'use client'

export default function BottomTabBar({ active, setActive }: { 
  active: string; 
  setActive: (k: string) => void 
}) {
  const Item = ({ id, label, icon }: { id: string; label: string; icon: string }) => (
    <button
      className={`flex flex-col items-center justify-center flex-1 py-2 ${active === id ? 'text-red-600' : 'text-gray-500'}`}
      onClick={() => setActive(id)}
      aria-current={active === id ? 'page' : undefined}
    >
      <span className="text-lg" aria-hidden>{icon}</span>
      <span className="text-[11px] leading-none">{label}</span>
    </button>
  );
  
  return (
    <nav aria-label="Navegação principal" className="fixed bottom-0 left-0 right-0 bg-white border-t z-50 md:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-5">
        <Item id="feed" label="Feed" icon="🏠" />
        <Item id="explorar" label="Explorar" icon="🔎" />
        <Item id="mapa" label="Mapa" icon="🗺️" />
        <Item id="cine" label="Cine" icon="🎬" />
        <Item id="perfil" label="Perfil" icon="👤" />
      </div>
    </nav>
  );
}
