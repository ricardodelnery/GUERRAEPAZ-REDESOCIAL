export default function Composer() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-3">
      <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">VS</div>
      <input
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40"
        type="text"
        placeholder="O que estás a pensar?"
        aria-label="O que estás a pensar?"
      />
      <button className="bg-brand-red text-white text-sm font-semibold px-4 py-2 rounded-lg">Publicar</button>
    </div>
  );
}
