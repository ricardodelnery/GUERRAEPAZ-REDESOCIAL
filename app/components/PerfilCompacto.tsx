'use client'

export function PerfilCompacto() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <p className="text-sm text-gray-600 mb-3">Seu Perfil</p>
      <div className="flex items-center gap-3">
        <img 
          src="https://placehold.co/48x48/DC143C/FFFFFF?text=VS" 
          className="w-12 h-12 rounded-full" 
          alt="Avatar Vitor Siqueira" 
        />
        <div>
          <p className="font-semibold">Vitor Siqueira</p>
          <p className="text-xs text-gray-500">Operador • 1.2k XP</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="p-2 bg-gray-50 rounded">
          Missões<span className="block font-bold">12</span>
        </div>
        <div className="p-2 bg-gray-50 rounded">
          Contribs<span className="block font-bold">34</span>
        </div>
        <div className="p-2 bg-gray-50 rounded">
          Badges<span className="block font-bold">6</span>
        </div>
      </div>
    </div>
  )
}
