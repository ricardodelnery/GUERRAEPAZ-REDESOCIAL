export default function Composer() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold">VS</div>
        <input
          className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm outline-none"
          placeholder="O que estás a pensar?"
          disabled
        />
        <button className="bg-brand-red text-white text-sm font-semibold px-4 py-2 rounded-lg">Publicar</button>
      </div>
    </div>
  );
}
