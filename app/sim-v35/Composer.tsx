'use client';
export default function Composer() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-start gap-3">
        <img src="https://placehold.co/48x48/e2e8f0/334155?text=VS" className="w-12 h-12 rounded-full" alt="Avatar de Vitor Siqueira" />
        <div className="flex-1">
          <textarea placeholder="O que estás a pensar?"
                    className="w-full resize-none bg-gray-100 p-3 rounded-lg focus:outline-none text-sm" rows={3} />
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-2 text-gray-500">
              <button className="p-2 rounded-full hover:bg-gray-100" title="Anexar ficheiro">📎</button>
              <button className="p-2 rounded-full hover:bg-gray-100" title="Adicionar imagem">📷</button>
              <button className="p-2 rounded-full hover:bg-gray-100" title="Adicionar localização">📍</button>
            </div>
            <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-red-700">Publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
