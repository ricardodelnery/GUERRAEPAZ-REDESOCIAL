'use client'

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 bg-gray-200 rounded-full">
      <div className="h-2 bg-red-600 rounded-full" style={{ width: `${value}%` }} />
    </div>
  )
}
