'use client'
import { useState } from 'react'
import { PostCard } from './PostCard'

// Dados mock compatíveis com a interface do PostCard
const mockPosts = [
  {
    area: "Cinemateca",
    author: "Especialista em Desinformação", 
    avatar: "https://placehold.co/40x40/A5B4FC/3730A3?text=ED",
    title: "A narrativa em 'The Social Dilemma' e a Doutrina da Punição",
    excerpt: "Como enquadramentos emocionais moldam percepções públicas e desviam a atenção de questões estruturais...",
    time: "2d"
  },
  {
    area: "Arsenal", 
    author: "Agente Analítico",
    avatar: "https://placehold.co/40x40/C4B5FD/4338CA?text=AA", 
    title: "Expandindo o Capítulo 6: a 'Guerra de Asfixia'",
    excerpt: "Políticas de tarifas com impacto na soberania industrial — uma leitura crítica das sanções...",
    time: "1d"
  }
]

export function HomeMain() {
  const [posts] = useState(mockPosts)

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <PostCard 
          key={index}
          area={post.area}
          author={post.author}
          avatar={post.avatar}
          title={post.title} 
          excerpt={post.excerpt}
          time={post.time}
        />
      ))}
    </div>
  )
}
