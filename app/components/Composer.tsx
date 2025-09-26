export default function Composer() {
  return (
    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-100 grid place-items-center font-semibold text-gray-600">VS</div>
        <input
          className="flex-1 border-0 bg-gray-100 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40"
          type="text"
          placeholder="O que estás a pensar?"
          aria-label="O que estás a pensar?"
        />
        <button className="bg-brand-red text-white text-sm font-semibold px-4 py-2 rounded-xl shadow">Publicar</button>
      </div>
      <div className="mt-4 flex items-center justify-between px-2 text-[20px]">
        <div className="flex gap-6">
          <span role="img" aria-label="Anexo">📎</span>
          <span role="img" aria-label="Câmera">📷</span>
          <span role="img" aria-label="Localização">📍</span>
        </div>
      </div>
    </div>
  );
}
