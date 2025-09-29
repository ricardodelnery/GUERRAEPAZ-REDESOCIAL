'use client';
import { useState } from 'react';
import PostCard from './PostCard';

// Dados mock compatíveis com a interface do PostCard
const mockPosts = [
  {
    id: '1',
    title: 'Análise crítica de narrativas',
    content: 'Como enquadramentos emocionais moldam percepções públicas...',
    authorId: '1',
    category: 'CINEMATECA',
    area: 'Cinemateca',
    createdAt: new Date(),
    updatedAt: new Date(),
    author: {
      id: '1',
      username: 'especialista',
      name: 'Especialista em Desinformação',
      avatar: 'https://placehold.co/40x40/A5B4FC/3730A3?text=ED',
      level: 'OPERATOR'
    },
    reactions: [],
    comments: []
  },
  {
    id: '2',
    title: 'Expandindo o Capítulo 6',
    content: 'Políticas de tarifas com impacto na soberania industrial...',
    authorId: '2',
    category: 'ARSENAL', 
    area: 'Arsenal',
    createdAt: new Date(),
    updatedAt: new Date(),
    author: {
      id: '2',
      username: 'analista',
      name: 'Agente Analítico',
      avatar: 'https://placehold.co/40x40/C4B5FD/4338CA?text=AA',
      level: 'AGENT'
    },
    reactions: [],
    comments: []
  }
];

export default function HomeMain() {
  const [posts] = useState(mockPosts);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
