'use client';
import { useUi } from '../../lib/ui/UiContext';

export default function HeaderActionsClient() {
  const { openSearch, openNotif } = useUi();
  return (
    <div className="mx-auto max-w-7xl px-4 pb-3 flex gap-2 justify-end md:justify-end">
      <button
        className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm"
        onClick={(e) => openSearch(e.currentTarget)}
      >
        🔎 Buscar
      </button>
      <button
        className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm"
        onClick={(e) => openNotif(e.currentTarget)}
      >
        🔔 Notificações
      </button>
    </div>
  );
}
