'use client';
type Props = { open: boolean; onClose: () => void };
export default function SearchSheetClient({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Busca Híbrida">
      <button className="absolute inset-0 bg-black/40" onClick={onClose} aria-label="Fechar" />
      <div className="absolute left-0 right-0 bottom-0 bg-white rounded-t-2xl p-4 shadow-2xl">
        <div className="flex items-center gap-2">
          <input autoFocus placeholder="Busca semântica — conceitos, táticas, conflitos..."
                 className="flex-1 rounded-lg bg-gray-100 py-3 px-3 text-sm focus:outline-none" />
          <button className="px-3 py-2 rounded-lg bg-gray-100" onClick={onClose}>Fechar</button>
        </div>
        <div className="mt-3 text-xs text-gray-500">
          Dica: use filtros como área:Arsenal, tag:Sahel, tipo:vídeo
        </div>
      </div>
    </div>
  );
}
