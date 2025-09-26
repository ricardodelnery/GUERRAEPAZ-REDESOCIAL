export default function BottomTabBar() {
  const Item = ({ _id, label, icon, active }: { id: string; label: string; icon: string; active?: boolean }) => (
    <button
      className={`flex flex-col items-center justify-center flex-1 py-2 ${active ? 'text-red-600' : 'text-gray-500'}`}
      aria-current={active ? 'page' : undefined}
      aria-label={label}
    >
      <span aria-hidden className="text-lg">{icon}</span>
      <span className="text-[11px] leading-none">{label}</span>
    </button>
  );
  return (
    <nav aria-label="Navegação principal" className="fixed bottom-0 left-0 right-0 bg-white border-t z-50 md:hidden shadow" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-5">
        <Item id="feed" label="Feed" icon="🏠" active />
        <Item id="explorar" label="Explorar" icon="🔎" />
        <Item id="mapa" label="Mapa" icon="🗺️" />
        <Item id="cine" label="Cine" icon="🎬" />
        <Item id="perfil" label="Perfil" icon="👤" />
      </div>
    </nav>
  );
}
