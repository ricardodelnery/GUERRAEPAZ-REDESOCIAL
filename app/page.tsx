'use client';
import { useState } from 'react';
import SearchSheet from './components/SearchSheet';
import NotifDrawer from './components/NotifDrawer';

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">GUERRA & PAZ</div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-gray-900"
                aria-label="Buscar"
              >
                🔍
              </button>
              <button 
                onClick={() => setNotifOpen(true)}
                className="p-2 text-gray-600 hover:text-gray-900 relative"
                aria-label="Notificações"
              >
                🔔
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">GUERRA É PAZ</h1>
          <p className="text-lg text-gray-600">Soberania Intelectual - Layout em Evolução</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Feed Principal</h2>
          <p className="text-gray-600 mb-6">
            Sistema de posts, comentários e interações em desenvolvimento.
          </p>
          <div className="text-sm text-gray-400">
            © 2025 Guerra & Paz. Soberania Intelectual.
          </div>
        </div>
      </main>

      {/* Components */}
      <SearchSheet open={searchOpen} onClose={() => setSearchOpen(false)} />
      <NotifDrawer open={notifOpen} onClose={() => setNotifOpen(false)} />
    </div>
  );
}
