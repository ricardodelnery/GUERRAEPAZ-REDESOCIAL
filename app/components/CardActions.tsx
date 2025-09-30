'use client'

function Btn({ label }: { label: string }) {
  return <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm">{label}</button>
}

export function CardActions() {
  return (
    <div className="mt-4 flex items-center gap-2 text-sm">
      <Btn label="�� 42" />
      <Btn label="💡 18" />
      <Btn label="👎 2" />
      <Btn label="🚀 4" />
      <div className="ml-auto flex items-center gap-3 text-xs text-gray-500">
        <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100">Comentar</button>
        <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100">Partilhar</button>
        <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100">Guardar</button>
      </div>
    </div>
  )
}
