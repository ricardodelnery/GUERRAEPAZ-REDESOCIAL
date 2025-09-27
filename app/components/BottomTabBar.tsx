'use client';

interface BottomTabBarProps {
  active: string;
  setActive: (tab: string) => void;
}

export default function BottomTabBar({ active, setActive }: BottomTabBarProps) {
  const tabs = [
    { id: 'feed', label: 'Feed', icon: '🏠' },
    { id: 'explorar', label: 'Explorar', icon: '🔎' },
    { id: 'mapa', label: 'Mapa', icon: '🗺️' },
    { id: 'cine', label: 'Cine', icon: '🎬' },
    { id: 'perfil', label: 'Perfil', icon: '👤' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t z-50 md:hidden" 
         style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
         aria-label="Navegação principal">
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex flex-col items-center justify-center flex-1 py-2 ${
              active === tab.id ? 'text-red-600' : 'text-gray-500'
            }`}
            onClick={() => setActive(tab.id)}
            aria-current={active === tab.id ? 'page' : undefined}
          >
            <span className="text-lg" aria-hidden>{tab.icon}</span>
            <span className="text-[11px] leading-none">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
