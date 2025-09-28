export default function StoreCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold text-sm mb-2">Loja</h4>
      <p className="text-xs text-gray-600 mb-3">Adquira o livro e ative seu acesso de Operador.</p>
      
      <div className="flex gap-3">
        <img 
          src="https://placehold.co/80x120/111827/FFFFFF?text=Guerra+%26+Paz" 
          alt="Capa do livro Guerra & Paz" 
          className="w-20 rounded-md flex-shrink-0"
        />
        <div className="flex flex-col justify-center min-w-0">
          <p className="font-bold text-sm">Guerra & Paz</p>
          <p className="text-xs text-gray-500 mb-2">Decodificando a Propaganda</p>
          <button className="bg-red-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap">
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  )
}
