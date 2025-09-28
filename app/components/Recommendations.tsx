export default function Recommendations() {
  const users = [
    { name: "Operador Perspicaz", avatar: "https://placehold.co/32x32/FDBA74/C2410C?text=OP" },
    { name: "Agente Analítico", avatar: "https://placehold.co/32x32/C4B5FD/4338CA?text=AA" },
    { name: "Mestre Estratégico", avatar: "https://placehold.co/32x32/86EFAC/166534?text=ME" }
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold text-sm mb-3">Recomendações</h4>
      <p className="text-xs text-gray-600 mb-3">Operadores a seguir</p>
      
      <div className="space-y-3">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <img 
                src={user.avatar} 
                className="w-8 h-8 rounded-full flex-shrink-0" 
                alt={`Avatar de ${user.name}`} 
              />
              <div className="text-sm font-medium truncate">{user.name}</div>
            </div>
            <button className="text-xs px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap flex-shrink-0">
              Seguir
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
