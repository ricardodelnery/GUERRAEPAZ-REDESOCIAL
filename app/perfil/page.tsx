'use client'

import { useState } from 'react'

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 bg-gray-200 rounded-full">
      <div className="h-2 bg-red-600 rounded-full" style={{ width: `${value}%` }} />
    </div>
  )
}

function ProfileHeader() {
  return (
    <section className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="h-24 sm:h-32 bg-gradient-to-r from-gray-900 to-gray-700" aria-hidden />
      <div className="p-4">
        <div className="-mt-12 flex items-end gap-3">
          <img src="https://placehold.co/96x96/e2e8f0/334155?text=VS" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-4 ring-white" alt="Avatar do usuário" />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold leading-tight">Vitor Siqueira</h2>
            <p className="text-xs text-gray-500">@vitor.siqueira • Operador</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>XP 1.240 / 2.000</span>
            <span>Nível: Operador</span>
          </div>
          <div className="mt-2"><ProgressBar value={62} /></div>
        </div>
      </div>
    </section>
  )
}

function ClientTabButton({ 
  id, 
  label, 
  active, 
  onClick 
}: { 
  id: string
  label: string
  active: boolean
  onClick: (id: string) => void
}) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`px-3 py-2 rounded-lg text-sm ${
        active ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      {label}
    </button>
  )
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('posts')

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <ProfileHeader />
      
      <div className="mt-6 flex gap-2 overflow-x-auto no-scrollbar">
        <ClientTabButton id="posts" label="Posts" active={activeTab === 'posts'} onClick={setActiveTab} />
        <ClientTabButton id="contribs" label="Contribuições" active={activeTab === 'contribs'} onClick={setActiveTab} />
        <ClientTabButton id="missoes" label="Missões" active={activeTab === 'missoes'} onClick={setActiveTab} />
        <ClientTabButton id="dossies" label="Dossiês" active={activeTab === 'dossies'} onClick={setActiveTab} />
        <ClientTabButton id="sobre" label="Sobre" active={activeTab === 'sobre'} onClick={setActiveTab} />
      </div>

      <div className="mt-6">
        {activeTab === 'posts' && (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">Posts do usuário</h3>
            <p className="text-sm text-gray-600 mt-2">Conteúdo será carregado aqui...</p>
          </div>
        )}
        {activeTab === 'contribs' && (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">Contribuições</h3>
            <p className="text-sm text-gray-600 mt-2">Lista de contribuições...</p>
          </div>
        )}
        {activeTab === 'missoes' && (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">Missões</h3>
            <p className="text-sm text-gray-600 mt-2">Missões em progresso...</p>
          </div>
        )}
        {activeTab === 'dossies' && (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">Dossiês</h3>
            <p className="text-sm text-gray-600 mt-2">Dossiês criados...</p>
          </div>
        )}
        {activeTab === 'sobre' && (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">Sobre</h3>
            <p className="text-sm text-gray-600 mt-2">Informações do perfil...</p>
          </div>
        )}
      </div>
    </div>
  )
}
