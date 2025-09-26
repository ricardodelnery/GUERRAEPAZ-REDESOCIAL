import Composer from "./components/Composer";
import Highlights from "./components/Highlights";
export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6" data-testid="home-grid">
      {/* LEFT (lg+) */}
      <aside className="hidden lg:block lg:col-span-3" data-testid="home-left">
        <div className="sticky top-24 space-y-4">
        <div className="sticky top-24 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">Perfil compacto</div>
          <div className="bg-white p-4 rounded-xl shadow-sm">Atalhos</div>
          <div className="bg-white p-4 rounded-xl shadow-sm">Grupos</div>
        </div>
              </div>
            </aside>

      {/* FEED (centro) */}
      <section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-4" data-testid="feed">
        <Highlights />
        <Composer />
        <Highlights />
        <Composer />
        <article className="bg-white p-4 rounded-xl shadow-sm" data-testid="post-card">
          <header className="flex items-center justify-between">
            <div className="font-semibold text-sm">Autor Exemplo</div>
            <time className="text-xs text-gray-500">2d</time>
          </header>
          <h3 className="mt-2 text-base font-semibold tracking-tight">Título do post</h3>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">Conteúdo estático de exemplo do feed.</p>
        </article>
      </section>

      {/* RIGHT (md+) */}
      <aside className="hidden md:block md:col-span-4 lg:col-span-3" data-testid="home-right">
        <div className="sticky top-24 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"><div className="text-sm font-semibold mb-2">Recomendações</div><div className="flex items-center gap-2 text-sm"><div className="h-7 w-7 rounded-full bg-orange-200"/>Operador Perspicaz<button className="ml-auto text-brand-red text-xs">Seguir</button></div><div className="mt-2 flex items-center gap-2 text-sm"><div className="h-7 w-7 rounded-full bg-indigo-200"/>Agente Analítico<button className="ml-auto text-brand-red text-xs">Seguir</button></div></div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"><div className="text-sm font-semibold mb-2">Loja</div><div className="h-24 rounded-lg bg-gray-900 mb-2"></div><button className="bg-brand-red text-white text-sm font-semibold px-3 py-1.5 rounded-lg">Comprar Agora</button></div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"><div className="text-sm font-semibold mb-2">Eventos</div><div className="text-sm text-gray-700">Análise coletiva: “Crise 2008” — 26 Set</div></div>
        </div>
        <div className="sticky top-24 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">Recomendações</div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">Loja</div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">Eventos</div>
        </div>
        <div className="sticky top-24 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">Recomendações</div>
          <div className="bg-white p-4 rounded-xl shadow-sm">Loja</div>
          <div className="bg-white p-4 rounded-xl shadow-sm">Eventos</div>
        </div>
      </aside>
    </div>
  );
}
