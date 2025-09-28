// app/components/PostCard.tsx
'use client'

import { Post } from '@prisma/client'

interface PostCardProps {
  post: Post & {
    author: {
      id: string
      username: string
      name: string | null
      avatar: string | null
      level: string
    }
    reactions: Array<{ type: string }>
    comments: Array<{ id: string }>
  }
}

export default function PostCard({ post }: PostCardProps) {
  const reactionCounts = post.reactions.reduce((acc, reaction) => {
    acc[reaction.type] = (acc[reaction.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <article className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          <img 
            src={post.author.avatar || `https://placehold.co/40x40/e2e8f0/334155?text=${post.author.username.charAt(0)}`}
            className="w-10 h-10 rounded-full" 
            alt={`Avatar de ${post.author.username}`} 
          />
          <div>
            <p className="font-semibold text-sm text-gray-900">
              {post.author.name || post.author.username}
            </p>
            <p className="text-xs text-gray-500">
              {new Date(post.createdAt).toLocaleDateString('pt-BR')} • {post.area}
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Mais opções">
          •••
        </button>
      </div>
      
      <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-2">{post.title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{post.content}</p>
      
      <div className="mt-4 flex items-center gap-2 text-sm">
        <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          👍 {reactionCounts.LIKE || 0}
        </button>
        <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          💡 {reactionCounts.INSIGHT || 0}
        </button>
        <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          👎 {reactionCounts.DISAGREE || 0}
        </button>
        <div className="ml-auto flex items-center gap-2 text-xs text-gray-500">
          <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            Comentar ({post.comments.length})
          </button>
          <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            Partilhar
          </button>
        </div>
      </div>
    </article>
  )
}
