'use client';
import BrandMarkOfficial from './BrandMarkOfficial';
/** Esqueleto mínimo só p/ validar a rota sem travar o terminal.
 *  Depois vou acrescentando os blocos (BrandMark, Header, etc.) em partes pequenas. */
export default function MobileFirstHomeSimV35() {  return (
    <div className="min-h-svh bg-gray-100 text-gray-900">
      <header className="bg-white sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <BrandMarkOfficial />
          <span className="text-sm text-gray-600">SIM-V35 (base)</span>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-sm text-gray-600">Rota /sim-v35 ativa. Pronta para receber os blocos completos.</p>
      </main>
    </div>
  );
}
