'use client';
export default function BottomTabBar() {
  const items = [
    { id: 'feed', label: 'Feed', icon: '🏠' },
    { id: 'explorar', label: 'Explorar', icon: '🔎' },
    { id: 'mapa', label: 'Mapa', icon: '🗺️' },
    { id: 'cine', label: 'Cine', icon: '🎬' },
    { id: 'perfil', label: 'Perfil', icon: '👤' },
  ];
  return (
    <nav aria-label="Navegação principal"
         className="fixed bottom-0 left-0 right-0 bg-white border-t z-50 md:hidden"
         style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-5">
        {items.map(({ id, label, icon }) => (
          <button key={id} className="flex flex-col items-center justify-center py-2 text-gray-500">
            <span className="text-lg" aria-hidden>{icon}</span>
            <span className="text-[11px] leading-none">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
