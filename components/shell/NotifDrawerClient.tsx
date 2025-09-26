'use client';
import { useEffect, useRef } from 'react';

type Props = { open: boolean; onClose: () => void };

export default function NotifDrawerClient({ open, onClose }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => firstBtnRef.current?.focus(), 0);
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
      aria-label="Notificações"
      onKeyDown={onKeyDown}
    >
      <button className="absolute inset-0 bg-black/40" onClick={onClose} aria-label="Fechar overlay" />
      <aside className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Notificações</h2>
          <button className="px-3 py-2 rounded-lg bg-gray-100" onClick={onClose} ref={firstBtnRef}>Fechar</button>
        </div>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="p-3 rounded-lg bg-gray-50">🔔 Nova análise publicada</li>
          <li className="p-3 rounded-lg bg-gray-50">💬 Comentário no seu post</li>
          <li className="p-3 rounded-lg bg-gray-50">🛡️ Atualização de segurança</li>
        </ul>
      </aside>
    </div>
  );
}
