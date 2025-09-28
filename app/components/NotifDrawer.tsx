'use client'

export default function NotifDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null

  const notifications = [
    { id: 1, text: "Sua análise foi validada pela comunidade", time: "2h", type: "success" },
    { id: 2, text: "Novo comentário em 'Análise do Sahel'", time: "5h", type: "comment" },
    { id: 3, text: "Missão disponível: 'Crise 2008'", time: "1d", type: "mission" },
  ]

  return (
    <div className="fixed inset-0 z-40">
      {/* Overlay */}
      <button 
        className="absolute inset-0 bg-black/40" 
        onClick={onClose}
        aria-label="Fechar notificações"
      />
      
      {/* Drawer */}
      <aside className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl animate-in slide-in-from-right-80">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">Notificações</h2>
            <button 
              className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={onClose}
            >
              Fechar
            </button>
          </div>
        </div>
        
        <div className="p-2">
          {notifications.map((notif) => (
            <div key={notif.id} className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <p className="text-sm text-gray-800">{notif.text}</p>
              <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}
