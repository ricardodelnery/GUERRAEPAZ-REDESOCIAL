function CardActions() {
  const Btn = ({ label }: { label: string }) => (
    <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm transition-colors">
      {label}
    </button>
  )

  return (
    <div className="mt-4 flex items-center gap-2 text-sm">
      <Btn label="👍 42" />
      <Btn label="💡 18" />
      <Btn label="👎 2" />
      <Btn label="🚀 4" />
      <div className="ml-auto flex items-center gap-3 text-xs text-gray-500">
        <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">Comentar</button>
        <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">Partilhar</button>
      </div>
    </div>
  )
}

export default function PostCard({ area, author, avatar, title, excerpt, time }: { 
  area: string; 
  author: string; 
  avatar: string; 
  title: string; 
  excerpt: string; 
  time: string; 
}) {
  return (
    <article className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <img src={avatar} className="w-10 h-10 rounded-full" alt={`Avatar de ${author}`} />
          <div>
            <p className="font-semibold text-sm">{author}</p>
            <p className="text-xs text-gray-500">{time} • {area}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Mais opções">
          •••
        </button>
      </div>
      
      <h3 className="mt-3 font-semibold text-gray-800 text-sm leading-tight">{title}</h3>
      <p className="text-sm text-gray-700 mt-2 leading-relaxed">{excerpt}</p>
      
      <CardActions />
    </article>
  )
}
