'use client';
import { useEffect, useRef } from 'react';

type Props = { open: boolean; onClose: () => void };

export default function SearchSheetClient({ open, onClose }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!open) return;
    // foco inicial
    const t = setTimeout(() => inputRef.current?.focus(), 0);
    return () => clearTimeout(t);
  }, [open]);

  if (!open) return null;

  const getFocusables = () => {
    const root = rootRef.current;
    if (!root) return [] as HTMLElement[];
    return Array.from(
      root.querySelectorAll<HTMLElement>(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key === 'Tab') {
      const focusables = getFocusables();
      if (focusables.length === 0) return;
      const current = document.activeElement as HTMLElement | null;
      const idx = Math.max(0, focusables.indexOf(current || focusables[0]));
      e.preventDefault();
      if (e.shiftKey) {
        const prev = (idx - 1 + focusables.length) % focusables.length;
        focusables[prev].focus();
      } else {
        const next = (idx + 1) % focusables.length;
        focusables[next].focus();
      }
    }
  };

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Busca Híbrida"
      onKeyDown={onKeyDown}
    >
      <button className="absolute inset-0 bg-black/40" onClick={onClose} aria-label="Fechar overlay" />
      <div className="absolute left-0 right-0 bottom-0 bg-white rounded-t-2xl p-4 shadow-2xl">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            placeholder="Busca semântica — conceitos, táticas, conflitos..."
            className="flex-1 rounded-lg bg-gray-100 py-3 px-3 text-sm focus:outline-none"
          />
          <button className="px-3 py-2 rounded-lg bg-gray-100" onClick={onClose}>Fechar</button>
        </div>
        <div className="mt-3 text-xs text-gray-500">
          Dica: use filtros como área:Arsenal, tag:Sahel, tipo:vídeo
        </div>
      </div>
    </div>
  );
}
