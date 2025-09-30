'use client'

export function ClientTabButton({ 
  id, 
  label, 
  active, 
  onClick 
}: { 
  id: string
  label: string
  active: boolean
  onClick: (id: string) => void
}) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`px-3 py-2 rounded-lg text-sm ${
        active ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      {label}
    </button>
  )
}
