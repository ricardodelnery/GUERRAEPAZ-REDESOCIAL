'use client'

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm whitespace-nowrap">
      {children}
    </button>
  )
}
