'use client'
import { useEffect, useState } from "react";

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

// Estrutura principal da página
export default function Home() {
  const [activeTab, setActiveTab] = useState<'feed'>("feed");
  
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
      
      <main className="max-w-7xl mx-auto p-4">
        <p>Layout em construção - Passo 2 (Logomarca adicionada)</p>
      </main>
    </div>
  );
}
