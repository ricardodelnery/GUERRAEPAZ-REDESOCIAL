// Vamos criar um arquivo mais simples primeiro para testar
'use client';
import { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('feed');
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">GUERRA É PAZ</div>
          <div className="flex gap-4">
            <button className="p-2">🔍</button>
            <button className="p-2">🔔</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded">Entrar</button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Layout em Construção</h1>
          <p className="text-gray-600">Implementando estrutura completa da diretiva...</p>
          <div className="mt-4 flex gap-2 justify-center">
            <button 
              className={`px-4 py-2 rounded ${activeTab === 'feed' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('feed')}
            >
              Feed
            </button>
            <button 
              className={`px-4 py-2 rounded ${activeTab === 'perfil' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('perfil')}
            >
              Perfil
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
