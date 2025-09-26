export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6" data-testid="home-grid">
      {/* LEFT (lg+) */}
      <aside className="hidden lg:block lg:col-span-3" data-testid="home-left">
        <div className="sticky top-24 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">Perfil compacto</div>
          <div className="bg-white p-4 rounded-lg shadow-sm">Atalhos</div>
          <div className="bg-white p-4 rounded-lg shadow-sm">Grupos</div>
        </div>
      </aside>

      {/* FEED (centro) */}
      <section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-4" data-testid="feed">
        <article className="bg-white p-4 rounded-lg shadow-sm" data-testid="post-card">
          <header className="flex items-center justify-between">
            <div className="font-semibold text-sm">Autor Exemplo</div>
            <time className="text-xs text-gray-500">2d</time>
          </header>
          <h3 className="mt-2 font-semibold">Título do post</h3>
          <p className="text-sm text-gray-700 mt-1">Conteúdo estático de exemplo do feed.</p>
        </article>
      </section>

      {/* RIGHT (md+) */}
      <aside className="hidden md:block md:col-span-4 lg:col-span-3" data-testid="home-right">
        <div className="sticky top-24 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">Recomendações</div>
          <div className="bg-white p-4 rounded-lg shadow-sm">Loja</div>
          <div className="bg-white p-4 rounded-lg shadow-sm">Eventos</div>
        </div>
      </aside>
    </div>
  );
}
