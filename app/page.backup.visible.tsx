'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-black text-black">GUERRA</span>
            <span className="text-xl font-black text-red-600 ml-2">PAZ</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">🔍</button>
            <button className="p-2 rounded-full hover:bg-gray-100">🔔</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">Entrar</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Bem-vindo à Guerra & Paz</h1>
          <p className="text-gray-600">Plataforma de análise crítica e soberania intelectual.</p>
          
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Status: APLICAÇÃO FUNCIONAL</h3>
            <p className="text-sm text-gray-600">Componentes criados mas não integrados para evitar quebras.</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Guerra & Paz. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
