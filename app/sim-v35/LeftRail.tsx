'use client';
import { useState } from 'react';
function ProfileCompact() {
  return (
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
  );
}
function Shortcuts() {
  const Chip = ({ children }: { children: React.ReactNode }) => (
    <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm whitespace-nowrap">{children}</button>
  );
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-sm font-semibold mb-2">Atalhos</p>
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <Chip>Arsenal</Chip><Chip>Mapa de Conflitos</Chip><Chip>Cinemateca</Chip><Chip>Bibliografia</Chip>
      </div>
    </div>
  );
}
function GroupsAccordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <button className="w-full flex items-center justify-between" aria-expanded={open} onClick={() => setOpen(v=>!v)}>
        <p className="text-sm font-semibold">Grupos</p><span className="text-gray-500">{open ? '−' : '+'}</span>
      </button>
      <div className={`${open ? 'mt-3 space-y-2' : 'hidden'}`}>
        <button className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100">Geopolítica</button>
        <button className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100">Desinformação</button>
      </div>
    </div>
  );
}
export default function LeftRail() {
  return (
    <div className="space-y-4">
      <ProfileCompact />
      <Shortcuts />
      <GroupsAccordion />
    </div>
  );
}
