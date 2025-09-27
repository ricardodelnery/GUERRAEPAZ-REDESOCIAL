'use client';

export default function NotifDrawer({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
      <div className="bg-white w-80 h-full shadow-xl">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold">Notificações</h3>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>
        <div className="p-4">
          <p className="text-gray-500">Nenhuma notificação</p>
        </div>
      </div>
    </div>
  );
}
