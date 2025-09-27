'use client';
import { useEffect } from "react";

interface SearchSheetProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchSheet({ open, onClose }: SearchSheetProps) {
  useEffect(() => {
    if (open) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
    return () => document.documentElement.classList.remove('overflow-hidden');
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Busca">
      <button 
        className="absolute inset-0 bg-black/40" 
        onClick={onClose}
        aria-label="Fechar busca"
      />
      
      <div className="absolute top-0 left-0 right-0 bg-white shadow-lg animate-in slide-in-from-top-full">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full p-3 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <div className="absolute left-3 top-3 text-gray-400">
                🔍
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-4 max-h-96 overflow-y-auto">
          <div className="text-sm text-gray-500 mb-3">Sugestões</div>
          <div className="space-y-2">
            {['Tecnologia', 'Política', 'Cultura', 'Economia', 'Ciência'].map((item) => (
              <button
                key={item}
                className="w-full text-left p-2 hover:bg-gray-100 rounded"
                onClick={() => {
                  console.log('Buscar por:', item);
                  onClose();
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
