'use client'

import { useEffect, useState } from "react"

const BRAND_SVG_RAW = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 28" role="img" aria-label="GUERRA É PAZ — logomarca oficial"></svg>'

function CssBrandLogo({ height = 36 }: { height?: number }) {
  const scale = height / 70
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
  )
}

export function BrandMarkOfficial() {
  const [svg, setSvg] = useState<string>(BRAND_SVG_RAW)

  useEffect(() => {
    if (BRAND_SVG_RAW) return
    let cancelled = false
    // Lógica de fallback para SVG
    return () => { cancelled = true }
  }, [])

  if (svg) {
    return (
      <span aria-label="GUERRA É PAZ — logomarca oficial" className="inline-flex items-center select-none h-8 sm:h-9" dangerouslySetInnerHTML={{ __html: svg }} />
    )
  }

  return (
    <span aria-label="GUERRA É PAZ — logomarca oficial" className="inline-flex items-center select-none h-8 sm:h-9">
      <span className="sm:hidden"><CssBrandLogo height={32} /></span>
      <span className="hidden sm:inline-flex"><CssBrandLogo height={36} /></span>
    </span>
  )
}
