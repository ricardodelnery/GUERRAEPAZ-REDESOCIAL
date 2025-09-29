'use client'

import { useState } from 'react'

export default function GroupsAccordion() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <button 
        className="w-full flex items-center justify-between text-sm font-semibold"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>Grupos</span>
        <span className="text-gray-500 text-lg">{open ? '−' : '+'}</span>
      </button>
      
      <div className={`${open ? 'mt-3 space-y-2' : 'hidden'}`}>
        <button className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100 text-sm transition-colors">
          Geopolítica
        </button>
        <button className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100 text-sm transition-colors">
          Desinformação
        </button>
        <button className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100 text-sm transition-colors">
          Análise de Mídia
        </button>
        <button className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100 text-sm transition-colors">
          História Militar
        </button>
      </div>
    </div>
  )
}
