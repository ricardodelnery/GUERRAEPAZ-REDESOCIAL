'use client'

import { useEffect } from 'react'

export default function SearchSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.documentElement.classList.add('overflow-hidden')
    } else {
      document.documentElement.classList.remove('overflow-hidden')
    }
    return () => document.documentElement.classList.remove('overflow-hidden')
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Buscar na plataforma">
      {/* Overlay */}
      <button 
        className="absolute inset-0 bg-black/40" 
        onClick={onClose}
        aria-label="Fechar busca"
      />
      
      {/* Sheet */}
      <div className="absolute left-0 right-0 bottom-0 bg-white rounded-t-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-80">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 relative">
            <input 
              autoFocus
              placeholder="Buscar conceitos, conflitos, análises..."
              className="w-full rounded-lg bg-gray-100 py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <button 
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
        
        <div className="text-xs text-gray-500 space-y-1">
          <p>💡 <strong>Dica:</strong> Use filtros como <code>área:Arsenal</code>, <code>tag:Sahel</code>, <code>tipo:análise</code></p>
          <p>🔍 Busca semântica por conceitos, não apenas palavras-chave</p>
        </div>
      </div>
    </div>
  )
}
