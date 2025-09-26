"use client";
import { useEffect, useMemo, useState } from "react";

/** SVG RAW mínimo — não deve bloquear fallback se não tiver formas */
const BRAND_SVG_RAW =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 28" role="img" aria-label="GUERRA É PAZ — logomarca oficial"></svg>';

const BRAND_B64_CHUNKS: string[] = [
  // opcional: linhas base64 aqui (vira prioridade 1)
];

function decodeBrandSvg(): string {
  const inline =
    typeof window !== "undefined" && BRAND_B64_CHUNKS.length
      ? atob(BRAND_B64_CHUNKS.join(""))
      : (typeof window !== "undefined" ? (localStorage.getItem("brand_svg_raw") || "") : "") ||
        BRAND_SVG_RAW;

  // só aceita se tiver formas desenháveis
  const hasShapes = /<(path|rect|circle|text|polygon|polyline|line|g)\b/i.test(inline);
  return hasShapes ? inline : "";
}

/** Fallback em CSS (wordmark “Guerra É Paz” + ícone) */
function CssBrandLogo({ height = 36 }: { height?: number }) {
  const scale = height / 70;
  return (
    <div
      className="gp-css-logo"
      style={{
        display: "inline-flex",
        alignItems: "center",
        transform: `scale(${scale})`,
        transformOrigin: "left center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 900,
        }}
      >
        <span style={{ fontSize: 70, color: "#000", letterSpacing: "-2px" }}>GUERRA</span>
        <div style={{ width: 15 }} />
        <span style={{ fontSize: 70, color: "#000", letterSpacing: "-2px" }}>É</span>
        <div style={{ width: 15 }} />
        <span style={{ fontSize: 70, color: "#DC143C", letterSpacing: "-2px" }}>PAZ</span>
        <div style={{ width: 25 }} />
        <div style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: 16,
                height: 20,
                background: "#DC143C",
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                marginBottom: 2,
              }}
            />
            <div
              style={{
                width: 20,
                height: 50,
                background: "#DC143C",
                clipPath: "polygon(30% 0%, 70% 0%, 80% 100%, 20% 100%)",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 20,
              fontFamily: "monospace",
              fontSize: 10,
              color: "#666",
              lineHeight: 1.2,
              fontWeight: "bold",
            }}
          >
            101<br />010<br />101<br />010<br />101
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BrandMarkOfficial() {
  const initial = useMemo(decodeBrandSvg, []);
  const [svg, setSvg] = useState<string>(initial);

  // Opcional: tenta /brand.svg público se existir
  useEffect(() => {
    if (svg) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/brand.svg");
        if (res?.ok) {
          const txt = await res.text();
          if (/<(path|rect|circle|text|polygon|polyline|line|g)\b/i.test(txt) && !cancelled) {
            setSvg(txt);
          }
        }
      } catch {}
    })();
    return () => { cancelled = true; };
  }, [svg]);

  const containerClass = "inline-flex items-center select-none h-8 sm:h-9";

  // 1) SVG inline válido
  if (svg) {
    return (
      <span
        aria-label="GUERRA É PAZ — logomarca oficial"
        className={containerClass}
        style={{ lineHeight: 0 }}
        dangerouslySetInnerHTML={{
          __html: svg.replace("<svg ", '<svg style="height:100%;display:block" '),
        }}
      />
    );
  }

  // 2) Fallback CSS
  return (
    <span aria-label="GUERRA É PAZ — logomarca oficial" className={containerClass}>
      <span className="sm:hidden"><CssBrandLogo height={32} /></span>
      <span className="hidden sm:inline-flex"><CssBrandLogo height={36} /></span>
    </span>
  );
}
