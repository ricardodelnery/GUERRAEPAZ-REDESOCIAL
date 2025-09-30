'use client'

export function LojaCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <h4 className="font-semibold mb-2">Loja Guerra & Paz</h4>
      <p className="text-sm text-gray-600 mb-3">
        Adquira o livro e ative seu acesso de Operador.
      </p>
      <div className="flex gap-3">
        <img 
          src="https://placehold.co/80x120/111827/FFFFFF?text=G&P" 
          alt="Capa do livro Guerra & Paz" 
          className="w-20 rounded-md"
        />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-sm">Guerra & Paz</p>
          <p className="text-xs text-gray-500 mb-2">Decodificando a Propaganda</p>
          <button className="bg-red-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-red-700">
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  )
}
