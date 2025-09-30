'use client'

export function Story({ title, bg }: { title: string; bg: string }) {
  return (
    <div
      className="min-w-[112px] h-28 rounded-lg bg-cover bg-center relative overflow-hidden text-white flex items-end p-2"
      style={{ backgroundImage: `url(${bg})` }}
      role="img"
      aria-label={title}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="z-10 font-semibold text-xs line-clamp-2">{title}</div>
    </div>
  )
}
