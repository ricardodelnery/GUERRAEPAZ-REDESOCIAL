import Chip from '../common/Chip';

export default function LeftRailStatic() {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-sm text-gray-600">Perfil</p>
        <div className="mt-3 flex items-center gap-3">
          <img src="https://placehold.co/48x48/e2e8f0/334155?text=VS" className="w-12 h-12 rounded-full" alt="Avatar de Vitor Siqueira" />
          <div>
            <p className="font-semibold">Vitor Siqueira</p>
            <p className="text-xs text-gray-500">Operador • 1.2k XP</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 bg-gray-50 rounded">Missões<span className="block font-bold">12</span></div>
          <div className="p-2 bg-gray-50 rounded">Contribs<span className="block font-bold">34</span></div>
          <div className="p-2 bg-gray-50 rounded">Badges<span className="block font-bold">6</span></div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-sm font-semibold mb-2">Atalhos</p>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <Chip>Arsenal</Chip>
          <Chip>Mapa de Conflitos</Chip>
          <Chip>Cinemateca</Chip>
          <Chip>Bibliografia</Chip>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-sm font-semibold">Grupos</p>
        <div className="mt-3 space-y-2">
          <button className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100">Geopolítica</button>
          <button className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100">Desinformação</button>
        </div>
      </div>
    </div>
  );
}
