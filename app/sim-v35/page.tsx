'use client';
import BrandMarkOfficial from './BrandMarkOfficial';

/** SIM-V35 — esqueleto mínimo
 *  Vamos colar o layout completo em partes pequenas.
 *  Esta rota é isolada e acessível em /sim-v35
 */
export default function MobileFirstHomeSimV35() {
  return (
    <div className="min-h-svh bg-gray-100 text-gray-900">
      <header className="bg-white sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <BrandMarkOfficial />
          <span className="text-sm text-gray-600">SIM-V35 • base</span>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-sm text-gray-600">
          Rota <code>/sim-v35</code> ativa. Vamos inserir o layout completo em blocos.
        </p>
      </main>
    </div>
  );
}
