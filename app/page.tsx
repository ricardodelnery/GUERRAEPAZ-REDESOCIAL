'use client'
import { useState } from "react";

const BRAND_SVG_RAW: string = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 28" role="img" aria-label="GUERRA É PAZ — logomarca oficial"></svg>';

function CssBrandLogo({ height = 36 }: { height?: number }) {
  const scale = height / 70;
  return (
    <div className="gp-css-logo" style={{ display: 'inline-flex', alignItems: 'center', transform: `scale(${scale})`, transformOrigin: 'left center' }}>
      <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 900 }}>
        <span style={{ fontSize: 70, color: '#000', fontWeight: 900, letterSpacing: '-2px' }}>GUERRA</span>
        <div style={{ width: 15 }} />
        <span style={{ fontSize: 70, color: '#000', fontWeight: 900, letterSpacing: '-2px' }}>É</span>
        <div style={{ width: 15 }} />
        <span style={{ fontSize: 70, color: '#DC143C', fontWeight: 900, letterSpacing: '-2px' }}>PAZ</span>
      </div>
    </div>
  );
}

function BrandMarkOfficial() {
  const [svg] = useState<string>(BRAND_SVG_RAW);
  if (svg) {
    return <span aria-label="GUERRA É PAZ — logomarca oficial" className="inline-flex items-center select-none h-8 sm:h-9" dangerouslySetInnerHTML={{ __html: svg }} />;
  }
  return (
    <span aria-label="GUERRA É PAZ — logomarca oficial" className="inline-flex items-center select-none h-8 sm:h-9">
      <span className="sm:hidden"><CssBrandLogo height={32} /></span>
      <span className="hidden sm:inline-flex"><CssBrandLogo height={36} /></span>
    </span>
  );
}

function CardActions() {
  const Btn = ({ label }: { label: string }) => (
    <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm">{label}</button>
  );
  return (
    <div className="mt-4 flex items-center gap-2 text-sm">
      <Btn label="👍 42" />
      <Btn label="💡 18" />
      <Btn label="👎 2" />
      <Btn label="🚀 4" />
      <div className="ml-auto flex items-center gap-3 text-xs text-gray-500">
        <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100">Comentar</button>
        <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100">Partilhar</button>
        <button className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100">Guardar</button>
      </div>
    </div>
  );
}

function PostCard({ area, author, avatar, title, excerpt, time }: { area: string; author: string; avatar: string; title: string; excerpt: string; time: string; }) {
  return (
    <article className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <img src={avatar} className="w-10 h-10 rounded-full" alt={`Avatar de ${author}`} />
          <div>
            <p className="font-semibold text-sm">{author}</p>
            <p className="text-xs text-gray-500">{time} • {area}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600" aria-label="Mais opções">•••</button>
      </div>
      <h3 className="mt-3 font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-700 mt-2">{excerpt}</p>
      <CardActions />
    </article>
  );
}

function Story({ title, bg }: { title: string; bg: string }) {
  return (
    <div className="min-w-[112px] h-28 rounded-lg bg-cover bg-center relative overflow-hidden text-white flex items-end p-2" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="z-10 font-semibold text-xs line-clamp-2">{title}</div>
    </div>
  );
}

function BottomTabBar({ active, setActive }: { active: string; setActive: (k: "feed" | "explorar" | "mapa" | "cine" | "perfil") => void }) {
  const Item = ({ id, label, icon }: { id: "feed" | "explorar" | "mapa" | "cine" | "perfil"; label: string; icon: string }) => (
    <button className={`flex flex-col items-center justify-center flex-1 py-2 ${active === id ? 'text-red-600' : 'text-gray-500'}`} onClick={() => setActive(id)}>
      <span className="text-lg" aria-hidden>{icon}</span>
      <span className="text-[11px] leading-none">{label}</span>
    </button>
  );
  return (
    <nav aria-label="Navegação principal" className="fixed bottom-0 left-0 right-0 bg-white border-t z-50 md:hidden">
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-5">
        <Item id="feed" label="Feed" icon="🏠" />
        <Item id="explorar" label="Explorar" icon="🔎" />
        <Item id="mapa" label="Mapa" icon="🗺️" />
        <Item id="cine" label="Cine" icon="🎬" />
        <Item id="perfil" label="Perfil" icon="👤" />
      </div>
    </nav>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'feed' | 'explorar' | 'mapa' | 'cine' | 'perfil'>("feed");

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white sticky top-0 z-50 border-b p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <BrandMarkOfficial />
          <div className="flex gap-2">
            <button>🔍</button>
            <button>��</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 pb-24 md:pb-6">
        <div className="bg-white p-3 rounded-lg shadow-sm flex gap-3 overflow-x-auto mb-6">
          <Story title="Análise: Ucrânia" bg="https://placehold.co/120x112/334155/ffffff?text=Ucrânia" />
          <Story title="Update: Sahel" bg="https://placehold.co/120x112/44403c/ffffff?text=Sahel" />
          <Story title="Podcast #23" bg="https://placehold.co/120x112/57534e/ffffff?text=Podcast" />
          <Story title="Live Q&A" bg="https://placehold.co/120x112/78716c/ffffff?text=Live" />
        </div>

        <div className="space-y-4">
          <PostCard 
            area="Cinemateca" 
            time="2d" 
            author="Especialista em Desinformação" 
            avatar="https://placehold.co/40x40/A5B4FC/3730A3?text=ED" 
            title="A narrativa em 'The Social Dilemma' e a Doutrina da Punição" 
            excerpt="Como enquadramentos emocionais moldam percepções públicas e desviam a atenção de questões estruturais, aplicando a Doutrina da Punição ao cidadão..." 
          />
          <PostCard 
            area="Arsenal" 
            time="1d" 
            author="Agente Analítico" 
            avatar="https://placehold.co/40x40/C4B5FD/4338CA?text=AA" 
            title="Expandindo o Capítulo 6: a 'Guerra de Asfixia'" 
            excerpt="Políticas de tarifas com impacto na soberania industrial — uma leitura crítica das sanções e seu alinhamento com a estratégia de asfixia..." 
          />
        </div>
      </main>

      <BottomTabBar active={activeTab} setActive={setActiveTab} />
    </div>
  );
}
