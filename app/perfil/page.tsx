'use client'

import { useState } from 'react'
import BottomTabBar from '../components/BottomTabBar'

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 bg-gray-200 rounded-full">
      <div className="h-2 bg-red-600 rounded-full transition-all duration-300" style={{ width: `${value}%` }} />
    </div>
  )
}

function ProfileHeader() {
  return (
    <section className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="h-24 sm:h-32 bg-gradient-to-r from-gray-900 to-gray-700" aria-hidden />
      <div className="p-4">
        <div className="-mt-12 flex items-end gap-3">
          <img 
            src="https://placehold.co/96x96/e2e8f0/334155?text=VS" 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-4 ring-white" 
            alt="Avatar de Vitor Siqueira" 
          />
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl font-bold leading-tight truncate">Vitor Siqueira</h2>
            <p className="text-xs text-gray-500">@vitor.siqueira • Operador</p>
          </div>
          <div className="hidden sm:flex gap-2 flex-shrink-0">
            <button className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm transition-colors">
              Mensagem
            </button>
            <button className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-sm text-white transition-colors">
              Seguir
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
          <div className="sm:col-span-3">
            <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
              <span>XP 1.240 / 2.000</span>
              <span>Nível: Operador</span>
            </div>
            <ProgressBar value={62} />
          </div>
          <div className="sm:col-span-1 flex sm:justify-end">
            <button className="sm:hidden w-full px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm transition-colors">
              Mensagem
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-700 leading-relaxed">
          Analista de mídia e políticas públicas. Interesse por desinformação, África e economia política. 
          "Fazer sentido do ruído" é a missão.
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="px-3 py-1 text-xs rounded-full bg-gray-100 whitespace-nowrap">🇧🇷 Campinas, BR</span>
          <span className="px-3 py-1 text-xs rounded-full bg-gray-100 whitespace-nowrap">🎯 Missões: 12</span>
          <span className="px-3 py-1 text-xs rounded-full bg-gray-100 whitespace-nowrap">📚 Contribuições: 34</span>
          <span className="px-3 py-1 text-xs rounded-full bg-gray-100 whitespace-nowrap">🏅 Badges: 6</span>
        </div>
      </div>
    </section>
  )
}

function UserStatsCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold text-sm mb-3">Estatísticas</h4>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xl font-bold text-gray-900">128</div>
          <div className="text-xs text-gray-500 mt-1">Posts</div>
        </div>
        <div>
          <div className="text-xl font-bold text-gray-900">2.4k</div>
          <div className="text-xs text-gray-500 mt-1">Seguidores</div>
        </div>
        <div>
          <div className="text-xl font-bold text-gray-900">312</div>
          <div className="text-xs text-gray-500 mt-1">Seguindo</div>
        </div>
      </div>
    </div>
  )
}

function BadgesCard() {
  const badges = [
    { label: "Operador Sênior", emoji: "🎯" },
    { label: "Curador de Fontes", emoji: "📚" },
    { label: "Analista de Mídia", emoji: "🎬" },
    { label: "Missões Completas", emoji: "✅" },
    { label: "Top 10 Semana", emoji: "🏆" },
    { label: "Guardian XP", emoji: "🛡️" }
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold text-sm mb-3">Badges</h4>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {badges.map((badge, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-lg">
              {badge.emoji}
            </div>
            <div className="mt-2 text-[11px] text-gray-600 text-center leading-tight line-clamp-2">
              {badge.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ActivityItem({ when, text }: { when: string; text: string }) {
  return (
    <li className="py-3 flex items-start gap-3 border-b border-gray-100 last:border-b-0">
      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-800 leading-relaxed">{text}</p>
        <p className="text-xs text-gray-500 mt-1">{when}</p>
      </div>
    </li>
  )
}

function MissionItem({ title, progress, status }: { title: string; progress: number; status: string }) {
  const statusColor = status === "Concluída" ? "text-green-600" : "text-blue-600"
  
  return (
    <div className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-sm transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <span className={`text-xs font-medium ${statusColor}`}>{status}</span>
      </div>
      <ProgressBar value={progress} />
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Progresso</span>
        <span>{progress}%</span>
      </div>
    </div>
  )
}

function PostCard({ area, author, avatar, title, excerpt, time }: { 
  area: string; 
  author: string; 
  avatar: string; 
  title: string; 
  excerpt: string; 
  time: string; 
}) {
  return (
    <article className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          <img src={avatar} className="w-10 h-10 rounded-full" alt={`Avatar de ${author}`} />
          <div>
            <p className="font-semibold text-sm text-gray-900">{author}</p>
            <p className="text-xs text-gray-500">{time} • {area}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Mais opções">
          •••
        </button>
      </div>
      
      <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-2">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{excerpt}</p>
      
      <div className="mt-4 flex items-center gap-2 text-sm">
        <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">👍 42</button>
        <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">💡 18</button>
        <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">👎 2</button>
        <div className="ml-auto flex items-center gap-2 text-xs text-gray-500">
          <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">Comentar</button>
          <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">Partilhar</button>
        </div>
      </div>
    </article>
  )
}

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState<'posts' | 'contribs' | 'missoes' | 'dossies' | 'sobre'>('posts')

  const TabButton = ({ id, label }: { id: typeof activeTab; label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        activeTab === id 
          ? 'bg-red-600 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
      aria-current={activeTab === id ? 'page' : undefined}
    >
      {label}
    </button>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 pt-4 pb-24 md:pb-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Conteúdo principal */}
          <section className="col-span-12 lg:col-span-8 space-y-6">
            <ProfileHeader />

            {/* Tabs de navegação */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              <TabButton id="posts" label="Posts" />
              <TabButton id="contribs" label="Contribuições" />
              <TabButton id="missoes" label="Missões" />
              <TabButton id="dossies" label="Dossiês" />
              <TabButton id="sobre" label="Sobre" />
            </div>

            {/* Conteúdo das tabs */}
            {activeTab === 'posts' && (
              <div className="space-y-4">
                <PostCard
                  area="Cinemateca"
                  time="3d"
                  author="Vitor Siqueira"
                  avatar="https://placehold.co/40x40/e2e8f0/334155?text=VS"
                  title="Propaganda e a coreografia do medo: notas de campo"
                  excerpt="Um panorama de como o medo é orquestrado em ciclos midiáticos e que sinais detectar para reduzir a vulnerabilidade cognitiva..."
                />
                <PostCard
                  area="Arsenal"
                  time="1w"
                  author="Vitor Siqueira"
                  avatar="https://placehold.co/40x40/e2e8f0/334155?text=VS"
                  title="Quadro comparativo: *narrativas-alvo* no Sahel"
                  excerpt="Tabela viva de enquadramentos recorrentes, fontes e contra-pontos documentados no dossiê em andamento..."
                />
              </div>
            )}

            {activeTab === 'contribs' && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-sm mb-4">Contribuições recentes</h4>
                <ul className="space-y-3">
                  <ActivityItem when="2 dias" text="Editou *Dossiê Sahel* • campo 'fontes'" />
                  <ActivityItem when="5 dias" text="Sugeriu tag *guerra-de-asfixia* em Capítulo 6" />
                  <ActivityItem when="1 semana" text="Curadoria em *Cinemateca*: adicionou 3 referências" />
                  <ActivityItem when="2 semanas" text="Validou 5 análises da comunidade" />
                </ul>
              </div>
            )}

            {activeTab === 'missoes' && (
              <div className="space-y-4">
                <MissionItem title="Missão: Crise 2008" progress={80} status="Em progresso" />
                <MissionItem title="Missão: Cartografar Sahel" progress={45} status="Em progresso" />
                <MissionItem title="Missão: Desmontar frame *segurança*" progress={100} status="Concluída" />
                <MissionItem title="Missão: Análise comparativa de mídia" progress={30} status="Em progresso" />
              </div>
            )}

            {activeTab === 'dossies' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-sm mb-2">Sahel: linhas de força</h4>
                  <p className="text-xs text-gray-500 mb-3">Análise geopolítica da região do Sahel</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Atualizado há 5 dias</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Ativo</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-sm mb-2">Ucrânia: cronologia crítica</h4>
                  <p className="text-xs text-gray-500 mb-3">Linha do tempo de eventos significativos</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Atualizado há 2 semanas</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Em revisão</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sobre' && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-sm mb-4">Informações do perfil</h4>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <span className="font-medium block mb-1">Bio:</span>
                    <p>Pesquisador independente, foco em mídia, políticas públicas e África. Colaborador do projeto *Guerra & Paz*.</p>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Idiomas:</span>
                    <p>Português • Inglês • Espanhol</p>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Membro desde:</span>
                    <p>Janeiro de 2025</p>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Links:</span>
                    <div className="flex gap-3 mt-1">
                      <a href="#" className="text-red-600 hover:underline text-sm">Site pessoal</a>
                      <a href="#" className="text-red-600 hover:underline text-sm">GitHub</a>
                      <a href="#" className="text-red-600 hover:underline text-sm">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            <UserStatsCard />
            <BadgesCard />
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-sm mb-3">Atividade recente</h4>
              <ul className="space-y-3">
                <ActivityItem when="2 horas" text="Comentou em 'Análise da Crise 2008'" />
                <ActivityItem when="1 dia" text="Recebeu badge 'Curador de Fontes'" />
                <ActivityItem when="3 dias" text="Subiu para o nível Operador (1.2k XP)" />
                <ActivityItem when="1 semana" text="Publicou análise com 50+ votos" />
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* BottomTabBar apenas para mobile - SEM PROPS */}
      <BottomTabBar />
    </div>
  )
}
