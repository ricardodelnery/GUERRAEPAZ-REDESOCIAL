'use client';
type Props = { open: boolean; onClose: () => void };
export default function NotifDrawerClient({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="Notificações">
      <button className="absolute inset-0 bg-black/40" onClick={onClose} aria-label="Fechar" />
      <aside className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-white p-4 shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold">Notificações</p>
          <button className="px-3 py-1 rounded bg-gray-100" onClick={onClose}>Fechar</button>
        </div>
        <ul className="mt-2 text-sm text-gray-600 divide-y">
          <li className="py-2">A tua análise foi validada • 2h</li>
          <li className="py-2">Novo comentário em 'Sahel' • 5h</li>
          <li className="py-2">Missão disponível: 'Crise 2008'</li>
        </ul>
      </aside>
    </div>
  );
}
