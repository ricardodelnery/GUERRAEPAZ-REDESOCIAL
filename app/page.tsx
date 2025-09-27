'use client';
import { useState } from "react";
import BrandMarkOfficial from './components/BrandMarkOfficial';
import BottomTabBar from './components/BottomTabBar';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('feed');
  
  return (
    <div className="min-h-screen bg-gray-100 pb-16 md:pb-0">
      {/* Header Profissional */}
      <header className="bg-white sticky top-0 z-50 border-b">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
          <BrandMarkOfficial />
          <div className="flex items-center gap-2">
            <button aria-label="Buscar" className="p-2 rounded-full hover:bg-gray-100 hidden md:flex">🔍</button>
            <button aria-label="Notificações" className="relative p-2 rounded-full hover:bg-gray-100 hidden md:flex">
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
            <p className="text-gray-600">Soberania Intelectual - Layout em Evolução</p>
          </div>
          
          {/* Conteúdo da Tab Ativa */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">{
              activeTab === 'feed' ? '📰' :
              activeTab === 'explorar' ? '🔎' :
              activeTab === 'mapa' ? '🗺️' :
              activeTab === 'cine' ? '🎬' : '👤'
            }</div>
            <h3 className="font-semibold text-xl mb-2">{
              activeTab === 'feed' ? 'Feed Principal' :
              activeTab === 'explorar' ? 'Explorar Conteúdo' :
              activeTab === 'mapa' ? 'Mapa de Conflitos' :
              activeTab === 'cine' ? 'Cinemateca' : 'Perfil do Usuário'
            }</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {activeTab === 'feed' ? 'Sistema de posts, comentários e interações em desenvolvimento.' :
               activeTab === 'explorar' ? 'Ferramentas de descoberta e busca semântica.' :
               activeTab === 'mapa' ? 'Visualização geoespacial de conflitos globais.' :
               activeTab === 'cine' ? 'Análise crítica de conteúdo audiovisual.' : 
               'Perfil personalizado com estatísticas e conquistas.'}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Guerra & Paz. Soberania Intelectual.</p>
        </div>
      </footer>

      {/* Bottom Tab Bar - Mobile */}
      <BottomTabBar active={activeTab} setActive={setActiveTab} />
    </div>
  );
}
