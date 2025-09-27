'use client';
import { useEffect } from "react";

interface NotifDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function NotifDrawer({ open, onClose }: NotifDrawerProps) {
  useEffect(() => {
    if (open) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
    return () => document.documentElement.classList.remove('overflow-hidden');
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Notificações">
      <button 
        className="absolute inset-0 bg-black/40" 
        onClick={onClose}
        aria-label="Fechar notificações"
      />
      
      <div className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-xl animate-in slide-in-from-right-full">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Notificações</h2>
          <button 
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto h-full">
          <div className="space-y-3">
            {[
              { id: 1, text: 'Novo comentário no seu post', time: '5 min', read: false },
              { id: 2, text: 'Usuário curtiu sua publicação', time: '1 h', read: true },
              { id: 3, text: 'Novo seguidor', time: '2 h', read: false },
              { id: 4, text: 'Mencionaram você', time: '5 h', read: true },
            ].map((notif) => (
              <div 
                key={notif.id} 
                className={`p-3 rounded-lg border ${
                  notif.read ? 'bg-white' : 'bg-blue-50 border-blue-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-sm flex-1">{notif.text}</span>
                  <span className="text-xs text-gray-400 ml-2">{notif.time}</span>
                </div>
                {!notif.read && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Ver todas as notificações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
