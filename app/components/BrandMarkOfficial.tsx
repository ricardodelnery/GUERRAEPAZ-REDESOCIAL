'use client';
import { useEffect, useState } from "react";

// Versão CSS da logo como fallback
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

export default function BrandMarkOfficial() {
  return (
    <span aria-label="GUERRA É PAZ — logomarca oficial" className="inline-flex items-center select-none">
      <span className="sm:hidden"><CssBrandLogo height={32} /></span>
      <span className="hidden sm:inline-flex"><CssBrandLogo height={36} /></span>
    </span>
  );
}
