'use client'
import { useState } from "react";

/************************************
 * LOGOMARCA — ordem de fontes (sem PNG)
 ************************************/
const BRAND_SVG_RAW: string = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 28" role="img" aria-label="GUERRA É PAZ — logomarca oficial"></svg>';

/************************************
 * LOGO em CSS (fornecido pelo usuário) — fallback
 ************************************/
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

/************************************
 * BrandMarkOfficial — prioridade: SVG → CSS
 ************************************/
function BrandMarkOfficial() {
  const [svg] = useState<string>(BRAND_SVG_RAW);

  if (svg) {
    return (
      <span aria-label="GUERRA É PAZ — logomarca oficial" className="inline-flex items-center select-none h-8 sm:h-9" dangerouslySetInnerHTML={{ __html: svg }} />
    );
  }

  return (
    <span aria-label="GUERRA É PAZ — logomarca oficial" className="inline-flex items-center select-none h-8 sm:h-9">
      <span className="sm:hidden"><CssBrandLogo height={32} /></span>
      <span className="hidden sm:inline-flex"><CssBrandLogo height={36} /></span>
    </span>
  );
}

/**********************
 * Navegação inferior
 **********************/
function BottomTabBar({ active, setActive }: { active: string; setActive: (k: "feed" | "explorar" | "mapa" | "cine" | "perfil") => void }) {
  const Item = ({ id, label, icon }: { id: "feed" | "explorar" | "mapa" | "cine" | "perfil"; label: string; icon: string }) => (
    <button
      className={`flex flex-col items-center justify-center flex-1 py-2 ${active === id ? 'text-red-600' : 'text-gray-500'}`}
      onClick={() => setActive(id)}
      aria-current={active === id ? 'page' : undefined}
    >
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

// Estrutura principal da página
export default function Home() {
  const [activeTab, setActiveTab] = useState<'feed' | 'explorar' | 'mapa' | 'cine' | 'perfil'>("feed");

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white sticky top-0 z-50 border-b p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <BrandMarkOfficial />
          <div className="flex gap-2">
            <button>🔍</button>
            <button>🔔</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 pb-24 md:pb-6">
        <p>Layout em construção - Passo 3 (BottomTabBar adicionado)</p>
      </main>

      <BottomTabBar active={activeTab} setActive={setActiveTab} />
    </div>
  );
}
