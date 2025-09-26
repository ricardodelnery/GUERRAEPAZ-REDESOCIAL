import Composer from "./components/Composer";
import Highlights from "./components/Highlights";
export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6" data-testid="home-grid">
      {/* LEFT (lg+) */}
      <aside className="hidden lg:block lg:col-span-3" data-testid="home-left">
        <div className="sticky top-24 space-y-4">
        <div className="sticky top-24 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow border border-gray-200">Perfil compacto</div>
          <div className="bg-white p-4 rounded-xl shadow border border-gray-200">Atalhos</div>
          <div className="bg-white p-4 rounded-xl shadow border border-gray-200">Grupos</div>
        </div>
              </div>
            </aside>

      {/* FEED (centro) */}
      <section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-4" data-testid="feed">
        <Highlights />
        <Composer />
        <Highlights />
        <Composer />
        <article className="bg-white p-4 rounded-xl shadow border border-gray-200" data-testid="post-card">
          <header className="flex items-center justify-between">
            <div className="font-semibold text-sm">Autor Exemplo</div>
            <time className="text-xs text-gray-500">2d</time>
          </header>
          <h3 className="mt-2 text-base font-semibold tracking-tight">Título do post</h3>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">Conteúdo estático de exemplo do feed.</p>
          <div className="mt-3 aspect-video rounded-lg bg-gray-100 border border-gray-200"></div>
        </article>
      </section>

      {/* RIGHT (md+) */}
      <aside className="hidden md:block md:col-span-4 lg:col-span-3" data-testid="home-right">
  <div className="sticky top-24 space-y-4">
    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
      <div className="font-semibold mb-2">Recomendações</div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-orange-100 grid place-items-center text-[12px] font-bold text-orange-700">OP</div>
            <div className="text-sm">Operador Perspicaz</div>
          </div>
          <button className="text-brand-red text-sm font-medium">Seguir</button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-indigo-100 grid place-items-center text-[12px] font-bold text-indigo-700">AA</div>
            <div className="text-sm">Agente Analítico</div>
          </div>
          <button className="text-brand-red text-sm font-medium">Seguir</button>
        </div>
      </div>
    </div>
    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
      <div className="font-semibold mb-2">Loja</div>
      <div className="flex items-center gap-3">
        <div className="h-16 w-10 rounded bg-black" />
        <div className="flex-1">
          <div className="text-sm font-medium">Guerra & Paz</div>
          <div className="text-xs text-gray-500">Decodificando a Propaganda</div>
        </div>
        <button className="bg-brand-red text-white text-xs font-semibold px-3 py-2 rounded-lg">Comprar Agora</button>
      </div>
    </div>
    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
      <div className="font-semibold mb-2">Eventos</div>
      <div className="text-sm">Análise coletiva: ‘Crise 2008’ — 26 Set</div>
    </div>
  </div>
</aside>
    </div>
  );
}
