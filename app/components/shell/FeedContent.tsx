'use client'

export function FeedContent() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-6">
        <div className="bg-white p-3 rounded-lg shadow-sm flex gap-3 overflow-x-auto">
          <div className="min-w-[112px] h-28 rounded-lg bg-gray-300 flex items-end p-2">
            <span className="text-white font-semibold text-xs">Stories</span>
          </div>
          <div className="min-w-[112px] h-28 rounded-lg bg-gray-400 flex items-end p-2">
            <span className="text-white font-semibold text-xs">Análises</span>
          </div>
          <div className="min-w-[112px] h-28 rounded-lg bg-gray-500 flex items-end p-2">
            <span className="text-white font-semibold text-xs">Mapa</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div className="flex-1">
              <textarea 
                placeholder="O que estás a pensar?" 
                className="w-full resize-none bg-gray-100 p-3 rounded-lg focus:outline-none text-sm" 
                rows={3}
              />
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-2 text-gray-500">
                  <button className="p-2 rounded-full hover:bg-gray-100">📎</button>
                  <button className="p-2 rounded-full hover:bg-gray-100">📷</button>
                </div>
                <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-red-700">
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div>
                <p className="font-semibold text-sm">Agente Analítico</p>
                <p className="text-xs text-gray-500">2d • Cinemateca</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">•••</button>
          </div>
          <h3 className="mt-3 font-semibold text-gray-800">Análise de padrões de desinformação</h3>
          <p className="text-sm text-gray-700 mt-2">
            Como identificar técnicas comuns de manipulação em ciclos midiáticos...
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">👍 42</button>
            <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">💡 18</button>
            <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">👎 2</button>
          </div>
        </div>
      </section>

      <aside className="hidden md:block md:col-span-4 lg:col-span-6">
        <div className="sticky top-24 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold">Recomendações</h4>
            <p className="text-sm text-gray-600 mt-2">Operadores a seguir</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold">Loja</h4>
            <p className="text-sm text-gray-600 mt-1">Adquira o livro e ative seu acesso de Operador.</p>
          </div>
        </div>
      </aside>
    </div>
  )
}
