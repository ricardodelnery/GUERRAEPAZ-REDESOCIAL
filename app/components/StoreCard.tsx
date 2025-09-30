'use client'

export function StoreCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold">Loja</h4>
      <p className="text-sm text-gray-600 mt-1">Adquira o livro e ative seu acesso de Operador.</p>
      <div className="mt-3 flex gap-2">
        <img src="https://placehold.co/150x220/111827/FFFFFF?text=Guerra+%26+Paz" alt="Capa do livro Guerra & Paz" className="w-20 rounded-md" />
        <div className="flex flex-col justify-center">
          <p className="font-bold">Guerra & Paz</p>
          <p className="text-xs text-gray-500 mb-2">Decodificando a Propaganda</p>
          <button className="bg-red-600 text-white text-sm font-semibold px-3 py-2 rounded-lg hover:bg-red-700">Comprar Agora</button>
        </div>
      </div>
    </div>
  )
}
