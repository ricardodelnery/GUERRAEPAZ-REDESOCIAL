export default function ProfileCompact() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-sm text-gray-600 mb-3">Perfil</p>
      <div className="flex items-center gap-3">
        <img 
          src="https://placehold.co/48x48/e2e8f0/334155?text=VS" 
          className="w-12 h-12 rounded-full" 
          alt="Avatar de Vitor Siqueira" 
        />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate">Vitor Siqueira</p>
          <p className="text-xs text-gray-500">Operador • 1.2k XP</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="p-2 bg-gray-50 rounded">
          Missões<span className="block font-bold mt-1">12</span>
        </div>
        <div className="p-2 bg-gray-50 rounded">
          Contribs<span className="block font-bold mt-1">34</span>
        </div>
        <div className="p-2 bg-gray-50 rounded">
          Badges<span className="block font-bold mt-1">6</span>
        </div>
      </div>
    </div>
  )
}
