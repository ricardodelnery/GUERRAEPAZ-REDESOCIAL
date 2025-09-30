'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('feed')

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="text-xl font-black text-black">GUERRA</span>
              <span className="text-xl font-black text-red-600 ml-2">PAZ</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">🔍</button>
            <button className="p-2 rounded-full hover:bg-gray-100">🔔</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">Entrar</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Bem-vindo à Guerra & Paz
          </h1>
          <p className="text-gray-600 mb-6">
            Plataforma de análise crítica e soberania intelectual.
          </p>
          
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setActiveTab('feed')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'feed' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Feed
            </button>
            <button 
              onClick={() => setActiveTab('perfil')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'perfil' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Perfil
            </button>
          </div>

          {activeTab === 'feed' && (
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Post de exemplo</h3>
                <p className="text-gray-600 mt-2">Conteúdo do feed será carregado aqui...</p>
              </div>
            </div>
          )}

          {activeTab === 'perfil' && (
            <div>
              <h3 className="font-semibold mb-4">Perfil do usuário</h3>
              <p className="text-gray-600">Informações do perfil serão carregadas aqui...</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Guerra & Paz. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
