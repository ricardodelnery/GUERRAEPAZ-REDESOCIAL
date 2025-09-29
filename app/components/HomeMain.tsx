// VERSAÇÃO ESTÁVEL COM FALLBACK
'use client'
import { useState, useEffect } from 'react'
import PostCard from './PostCard'
import ProfileCompact from './ProfileCompact'
import Shortcuts from './Shortcuts'
import GroupsAccordion from './GroupsAccordion'
import StoreCard from './StoreCard'
import EventsCard from './EventsCard'
import Recommendations from './Recommendations'

// Fallback estático - MESMO layout, só posts garantidos
const staticPosts = [
  {
    id: 1,
    area: "Cinemateca",
    author: "Especialista em Desinformação", 
    avatar: "https://placehold.co/40x40/A5B4FC/3730A3?text=ED",
    title: "A narrativa em 'The Social Dilemma' e a Doutrina da Punição",
    excerpt: "Como enquadramentos emocionais moldam percepções públicas e desviam a atenção de questões estruturais...",
    time: "2d"
  },
  {
    id: 2, 
    area: "Arsenal",
    author: "Agente Analítico",
    avatar: "https://placehold.co/40x40/C4B5FD/4338CA?text=AA", 
    title: "Expandindo o Capítulo 6: a 'Guerra de Asfixia'",
    excerpt: "Políticas de tarifas com impacto na soberania industrial — uma leitura crítica das sanções...",
    time: "1d"
  }
]

export default function HomeMain() {
  const [posts, setPosts] = useState(staticPosts)

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* LEFT SIDEBAR — lg+ */}
      <aside className="hidden lg:block lg:col-span-3">
        <div className="sticky top-24 space-y-4">
          <ProfileCompact />
          <Shortcuts />
          <GroupsAccordion />
        </div>
      </aside>

      {/* FEED (coluna central) */}
      <section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-6">
        {/* Stories */}
        <div className="bg-white p-3 rounded-lg shadow-sm flex gap-3 overflow-x-auto no-scrollbar">
          <div className="min-w-[112px] h-28 rounded-lg bg-cover bg-center relative overflow-hidden text-white flex items-end p-2" style={{backgroundImage: `url(https://placehold.co/120x112/334155/ffffff?text=Ucr%C3%A2nia)`}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="z-10 font-semibold text-xs line-clamp-2">Análise: Ucrânia</div>
          </div>
          <div className="min-w-[112px] h-28 rounded-lg bg-cover bg-center relative overflow-hidden text-white flex items-end p-2" style={{backgroundImage: `url(https://placehold.co/120x112/44403c/ffffff?text=Sahel)`}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="z-10 font-semibold text-xs line-clamp-2">Update: Sahel</div>
          </div>
        </div>

        {/* Composer */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <img src="https://placehold.co/48x48/e2e8f0/334155?text=VS" className="w-12 h-12 rounded-full" alt="Avatar de Vitor Siqueira" />
            <div className="flex-1">
              <textarea placeholder="O que estás a pensar?" className="w-full resize-none bg-gray-100 p-3 rounded-lg focus:outline-none text-sm" rows={3} />
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-2 text-gray-500">
                  <button className="p-2 rounded-full hover:bg-gray-100">📎</button>
                  <button className="p-2 rounded-full hover:bg-gray-100">📷</button>
                  <button className="p-2 rounded-full hover:bg-gray-100">📍</button>
                </div>
                <div className="flex gap-2">
                  <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-red-700">Publicar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feed - AGORA COM POSTS GARANTIDOS */}
        <div className="space-y-4">
          {posts.map((post: any) => (
            <PostCard 
              key={post.id}
              author={post.author}
              avatar={post.avatar}
              title={post.title}
              excerpt={post.excerpt}
              time={post.time}
            />
          ))}
        </div>

        {/* MOBILE-ONLY COMPLEMENTS */}
        <div className="space-y-4 md:hidden">
          <StoreCard />
          <EventsCard />
          <Shortcuts />
          <GroupsAccordion />
        </div>
      </section>

      {/* RIGHT SIDEBAR — md+ */}
      <aside className="hidden md:block md:col-span-4 lg:col-span-3">
        <div className="sticky top-24 space-y-4">
          <Recommendations />
          <StoreCard />
          <EventsCard />
        </div>
      </aside>
    </div>
  )
}
