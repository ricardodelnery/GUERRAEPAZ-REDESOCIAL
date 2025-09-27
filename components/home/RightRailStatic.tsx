import Image from 'next/image';
/* eslint-disable @next/next/no-img-element */
export default function RightRailStatic() {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-semibold">Recomendações</h4>
        <p className="text-sm text-gray-600 mt-2">Operadores a seguir</p>
        <div className="mt-3 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="https://placehold.co/32x32/FDBA74/C2410C?text=OP" alt="Avatar de Operador Perspicaz" width={32} height={32} className="w-8 h-8 rounded" />
              <div className="text-sm font-medium">Operador Perspicaz</div>
            </div>
            <button className="text-xs px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200">Seguir</button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="https://placehold.co/32x32/C4B5FD/4338CA?text=AA" alt="Avatar de Agente Analítico" width={32} height={32} className="w-8 h-8 rounded" />
              <div className="text-sm font-medium">Agente Analítico</div>
            </div>
            <button className="text-xs px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200">Seguir</button>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-semibold">Loja</h4>
        <p className="text-sm text-gray-600 mt-1">Adquira o livro e ative seu acesso de Operador.</p>
        <div className="mt-3 flex gap-2">
          <img src="https://placehold.co/150x220/111827/FFFFFF?text=Guerra+%26+Paz" alt="Capa do livro Guerra & Paz" className="w-20 rounded-md" />
          <div className="flex flex-col justify-center">
            <p className="font-bold">Guerra & Paz</p>
            <p className="text-xs text-gray-500 mb-2">Decodificando a Propaganda</p>
            <button className="bg-red-600 text-white text-sm font-semibold px-3 py-2 rounded-lg hover:bg-red-700">Comprar Agora</button>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-semibold">Eventos</h4>
        <p className="text-sm text-gray-600 mt-2">Análise coletiva: 'Crise 2008' — 26 Set</p>
      </div>
    </div>
  );
}
