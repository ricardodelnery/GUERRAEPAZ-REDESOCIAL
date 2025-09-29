import Image from 'next/image'
'use client'

interface PostCardSimpleProps {
  area: string
  author: string
  avatar: string
  title: string
  excerpt: string
  time: string
}

export default function PostCardSimple({ area, author, avatar, title, excerpt, time }: PostCardSimpleProps) {
  return (
    <article className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Image src={avatar} className="w-10 h-10 rounded-full" alt={`Avatar de ${author}`} / width={40} height={40} />
          <div>
            <p className="font-semibold text-sm">{author}</p>
            <p className="text-xs text-gray-500">{time} • {area}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600" aria-label="Mais opções">•••</button>
      </div>
      <h3 className="mt-3 font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-700 mt-2">{excerpt}</p>
      <div className="mt-4 flex items-center gap-2 text-sm">
        <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">👍 42</button>
        <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">💡 18</button>
        <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">👎 2</button>
        <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">🚀 4</button>
      </div>
    </article>
  )
}
