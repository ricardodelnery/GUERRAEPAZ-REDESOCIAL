'use client'

export function Stories() {
  const stories = [
    { title: "Ucrânia", bg: "https://placehold.co/120x112/334155/FFFFFF?text=Ucrânia" },
    { title: "Sahel", bg: "https://placehold.co/120x112/DC143C/FFFFFF?text=Sahel" },
    { title: "Crise 2008", bg: "https://placehold.co/120x112/666666/FFFFFF?text=2008" },
    { title: "Live Q&A", bg: "https://placehold.co/120x112/008000/FFFFFF?text=Live" },
    { title: "Podcast", bg: "https://placehold.co/120x112/FF6B00/FFFFFF?text=Podcast" }
  ]

  return (
    <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {stories.map((story, index) => (
          <div
            key={index}
            className="min-w-[112px] h-28 rounded-lg bg-cover bg-center relative overflow-hidden text-white flex items-end p-2"
            style={{ backgroundImage: `url(${story.bg})` }}
            role="img"
            aria-label={story.title}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="z-10 font-semibold text-xs line-clamp-2">{story.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
