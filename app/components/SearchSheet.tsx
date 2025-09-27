'use client';

export default function SearchSheet({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold">Buscar</h3>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>
        <div className="p-4">
          <input 
            type="text" 
            placeholder="Digite para buscar..."
            className="w-full p-2 border rounded"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
