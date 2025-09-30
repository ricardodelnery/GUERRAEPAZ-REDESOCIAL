'use client'

export function PostReal() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      {/* Cabeçalho do Post */}
      <div className="flex items-center gap-3 mb-3">
        <img 
          src="https://placehold.co/40x40/DC143C/FFFFFF?text=VS" 
          className="w-10 h-10 rounded-full" 
          alt="Avatar Vitor Siqueira" 
        />
        <div>
          <p className="font-semibold text-sm">Vitor Siqueira</p>
          <p className="text-xs text-gray-500">Operador • 2h • Cinemateca</p>
        </div>
      </div>
      
      {/* Conteúdo do Post */}
      <h3 className="font-semibold text-gray-800 mb-2">
        Análise: Técnicas de enquadramento em documentários geopolíticos
      </h3>
      <p className="text-sm text-gray-700 mb-3">
        Como a escolha de ângulos e música cria viés cognitivo mesmo em conteúdos "documentais".
        Estudo de caso com 3 produções recentes sobre o Sahel.
      </p>
      
      {/* Ações */}
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <button className="flex items-center gap-1 hover:text-red-600">
          👍 <span>42</span>
        </button>
        <button className="flex items-center gap-1 hover:text-red-600">
          💡 <span>18</span>
        </button>
        <button className="flex items-center gap-1 hover:text-red-600">
          👎 <span>2</span>
        </button>
        <button className="flex items-center gap-1 hover:text-red-600">
          🚀 <span>7</span>
        </button>
        <div className="ml-auto flex gap-2">
          <button className="text-xs px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200">
            Comentar
          </button>
          <button className="text-xs px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200">
            Partilhar
          </button>
        </div>
      </div>
    </div>
  )
}
