function Chip({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm whitespace-nowrap transition-colors">
      {children}
    </button>
  )
}

export default function Shortcuts() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-sm font-semibold mb-3">Atalhos</p>
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <Chip>Arsenal</Chip>
        <Chip>Mapa de Conflitos</Chip>
        <Chip>Cinemateca</Chip>
        <Chip>Bibliografia</Chip>
        <Chip>Fórum</Chip>
        <Chip>Dossiês</Chip>
      </div>
    </div>
  )
}
