import { useEffect, useState } from "react";

// SVG RAW mínimo válido
const BRAND_SVG_RAW: string = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 28" role="img" aria-label="GUERRA É PAZ — logomarca oficial"></svg>';

// Base64 opcional fatiado
const BRAND_B64_CHUNKS: string[] = [
  // "PHN2ZyB4bWxucz0i...",
];

// Montagem final do SVG inline
const BRAND_SVG_INLINE: string = (typeof window !== "undefined" && BRAND_B64_CHUNKS.length)
  ? atob(BRAND_B64_CHUNKS.join(""))
  : (BRAND_SVG_RAW || (typeof window !== "undefined" ? (localStorage.getItem("brand_svg_raw") || "") : ""));

// Logo em CSS (fallback)
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
        <div style={{ width: 25 }} />
        <div style={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 16, height: 20, background: '#DC143C', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', marginBottom: 2 }} />
            <div style={{ width: 20, height: 50, background: '#DC143C', clipPath: 'polygon(30% 0%, 70% 0%, 80% 100%, 20% 100%)' }} />
          </div>
          <div style={{ marginLeft: 20, fontFamily: 'monospace', fontSize: 10, color: '#666', lineHeight: 1.2, fontWeight: 'bold' }}>
            101<br />010<br />101<br />010<br />101
          </div>
        </div>
      </div>
    </div>
  );
}

// BrandMarkOfficial — prioridade: SVG → CSS
export default function BrandMarkOfficial() {
  const [svg, setSvg] = useState<string>(BRAND_SVG_INLINE);

  useEffect(() => {
    if (BRAND_SVG_INLINE) return;
    let cancelled = false;
    (async () => {
      const tryUrl = async (u: string) => {
        try {
          const res = await fetch(u);
          if (!res.ok) return false;
          const txt = await res.text();
          // CORREÇÃO DO REGEX: removido escape duplo incorreto
          if (!cancelled && /<svg[\s\S]*<\/svg>/i.test(txt)) { setSvg(txt); return true; }
        } catch {}
        return false;
      };
      const urls = [
        '/mnt/data/BRAND_SVG_INLINE_OFFICIAL.txt',
        'sandbox:/mnt/data/BRAND_SVG_INLINE_OFFICIAL.txt',
        '/mnt/data/BRAND_SVG_INLINE.txt',
        'sandbox:/mnt/data/BRAND_SVG_INLINE.txt',
        '/mnt/data/gp_logo_horizontal_puro.svg',
        'sandbox:/mnt/data/gp_logo_horizontal_puro.svg',
        '/mnt/data/logo guerra á paz horizontal.svg',
        'sandbox:/mnt/data/logo guerra á paz horizontal.svg',
      ];
      for (const u of urls) { if (await tryUrl(u)) break; }
    })();
    return () => { cancelled = true; };
  }, []);

  // 1) SVG inline (prioridade)
  if (svg) {
    return (
      <span aria-label="GUERRA É PAZ — logomarca oficial" className="inline-flex items-center select-none h-8 sm:h-9" dangerouslySetInnerHTML={{ __html: svg }} />
    );
  }

  // 2) Fallback CSS
  return (
    <span aria-label="GUERRA É PAZ — logomarca oficial" className="inline-flex items-center select-none h-8 sm:h-9">
      <span className="sm:hidden"><CssBrandLogo height={32} /></span>
      <span className="hidden sm:inline-flex"><CssBrandLogo height={36} /></span>
    </span>
  );
}
