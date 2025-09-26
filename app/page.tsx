import Composer from "./components/Composer";
import FeedPostCard from './components/FeedPostCard';
import Highlights from "./components/Highlights";
const STATIC_POSTS = [
  { author: 'Operador Zero', handle: 'operador0', dateISO: '2025-09-26T12:00:00Z', content: 'Bem-vindo ao GUERRA & PAZ. Este é um post estático para o MVP Social.' }
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6" data-testid="home-grid">
      {/* LEFT (lg+) */}
      <aside className="hidden lg:block lg:col-span-3" data-testid="home-left">
  <div className="sticky top-24 space-y-4">
    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
      <div className="text-sm font-semibold mb-3">Perfil</div>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 grid place-items-center font-semibold text-gray-700">VS</div>
        <div>
          <div className="text-sm font-medium">Vitor Siqueira</div>
          <div className="text-xs text-gray-500">Operador · 1.2k XP</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 text-center">
        <div><div className="text-sm font-semibold">12</div><div className="text-[11px] text-gray-500">Missões</div></div>
        <div><div className="text-sm font-semibold">34</div><div className="text-[11px] text-gray-500">Contribs</div></div>
        <div><div className="text-sm font-semibold">6</div><div className="text-[11px] text-gray-500">Badges</div></div>
      </div>
    </div>

    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
      <div className="text-sm font-semibold mb-3">Atalhos</div>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-3 py-1 rounded-lg bg-gray-100">Arsenal</button>
        <button className="px-3 py-1 rounded-lg bg-gray-100">Mapa de Conflitos</button>
        <button className="px-3 py-1 rounded-lg bg-gray-100">Cine</button>
      </div>
      <div className="mt-3 h-2 rounded-xl bg-gray-200">
        <div className="h-2 w-1/2 rounded-xl bg-gray-400"></div>
      </div>
    </div>

    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
      <div className="text-sm font-semibold mb-3 flex items-center justify-between">
        <span>Grupos</span><span className="text-gray-400">+</span>
      </div>
      <div className="text-sm text-gray-500">—</div>
    </div>
  </div>
</aside>

      {/* FEED (centro) */}
      <section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-4" data-testid="feed">
          {STATIC_POSTS.map((p, i) => (<FeedPostCard key={i} {...p} />))}
        <Highlights />
        <Composer />
        <Highlights />
        <Composer />
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
