'use client';
import { useState } from "react";
import BrandMarkOfficial from './components/BrandMarkOfficial';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('feed');
  const [openSearch, setOpenSearch] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Profissional */}
      <header className="bg-white sticky top-0 z-50 border-b">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
          <BrandMarkOfficial />
          <div className="flex items-center gap-2">
            <button aria-label="Buscar" className="p-2 rounded-full hover:bg-gray-100" onClick={() => setOpenSearch(true)}>🔍</button>
            <button aria-label="Notificações" className="relative p-2 rounded-full hover:bg-gray-100" onClick={() => setOpenNotif(true)}>
              🔔
              <span className="absolute -top-1 -right-1 text-[10px] bg-red-600 text-white rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </button>
            <button className="bg-red-600 text-white font-semibold py-1.5 px-3 rounded-lg text-sm hover:bg-red-700">Entrar</button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">GUERRA & PAZ</h1>
            <p className="text-gray-600">Soberania Intelectual em Construção</p>
          </div>
          
          {/* Navegação por Tabs */}
          <div className="flex gap-2 justify-center mb-6">
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'feed' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveTab('feed')}
            >
              📰 Feed
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'perfil' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveTab('perfil')}
            >
              👤 Perfil
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'mapa' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveTab('mapa')}
            >
              🗺️ Mapa
            </button>
          </div>

          {/* Conteúdo da Tab Ativa */}
          <div className="bg-gray-50 rounded-lg p-4">
            {activeTab === 'feed' && (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📰</div>
                <h3 className="font-semibold mb-2">Feed em Desenvolvimento</h3>
                <p className="text-gray-600">Implementando sistema de posts e interações...</p>
              </div>
            )}
            {activeTab === 'perfil' && (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="font-semibold mb-2">Perfil em Desenvolvimento</h3>
                <p className="text-gray-600">Implementando sistema de perfil e estatísticas...</p>
              </div>
            )}
            {activeTab === 'mapa' && (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="font-semibold mb-2">Mapa em Desenvolvimento</h3>
                <p className="text-gray-600">Implementando visualização de conflitos...</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Guerra & Paz. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
