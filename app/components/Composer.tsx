export default function Composer() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-600">VS</div>
      <input
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40"
        type="text"
        placeholder="O que estás a pensar?"
        aria-label="O que estás a pensar?"
      />
      <button className="bg-brand-red text-white text-sm placeholder-gray-400 font-semibold px-4 py-2 rounded-lg">Publicar</button>
    </div>
  );
}
