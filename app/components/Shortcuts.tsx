'use client'

import { Chip } from './Chip'

export function Shortcuts() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-sm font-semibold mb-2">Atalhos</p>
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <Chip>Arsenal</Chip>
        <Chip>Mapa de Conflitos</Chip>
        <Chip>Cinemateca</Chip>
        <Chip>Bibliografia</Chip>
      </div>
    </div>
  )
}
