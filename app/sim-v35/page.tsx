'use client';
import BrandMarkOfficial from './BrandMarkOfficial';
/** Esqueleto mínimo só p/ validar a rota sem travar o terminal.
 *  Depois vou acrescentando os blocos (BrandMark, Header, etc.) em partes pequenas. */
export default function MobileFirstHomeSimV35() {  return (
    <div className="min-h-svh bg-gray-100 text-gray-900">
      <header className="bg-white sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <BrandMarkOfficial />
          <div className="flex items-center gap-1"><button aria-label="Buscar" className="p-2 rounded-full hover:bg-gray-100">🔎</button><button aria-label="Notificações" className="relative p-2 rounded-full hover:bg-gray-100">🔔<span className="absolute -top-1 -right-1 text-[10px] bg-red-600 text-white rounded-full h-4 w-4 flex items-center justify-center">3</span></button><button className="bg-red-600 text-white font-semibold py-1.5 px-3 rounded-lg text-sm">Entrar</button></div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-sm text-gray-600">Rota /sim-v35 ativa. Pronta para receber os blocos completos.</p>
      </main>
    </div>
  );
}
