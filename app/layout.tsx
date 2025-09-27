import HeaderActionsClient from '../components/shell/HeaderActionsClient';
import BrandMarkOfficial from "./components/BrandMarkOfficial";
import { UiProvider } from '../lib/ui/UiContext';
import ClientUiHost from '../components/shell/ClientUiHost';
import './globals.css';
import BottomTabBar from "./components/BottomTabBar";

export const metadata = { title: "Guerra & Paz" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={` font-sans min-h-svh bg-gray-100 text-gray-900`}><UiProvider><ClientUiHost>
        <header className="bg-white sticky top-0 z-50  border-b-2 border-brand-red">
          <div className="max-w-7xl mx-auto px-[var(--container-px)] py-[var(--header-y)] flex items-center justify-between">
            <BrandMarkOfficial />
            <div className="flex items-center gap-1">
              <button aria-label="Buscar" className="p-2 rounded hover:bg-gray-100">🔎</button>
              <HeaderActionsClient />
              <button className="brand-ring bg-brand-red text-white font-semibold py-1.5 px-3 rounded-lg text-sm">Entrar</button>
            </div>
          </div>
          <nav aria-label="Navegação secundária" className="hidden md:block bg-white border-t border-[var(--line)]">
            <div className="max-w-7xl mx-auto px-[var(--container-px)] py-2 flex items-center gap-6 text-sm">
              <a className="text-brand-red font-medium" href="#pb-2 border-b-2 border-brand-red">Feed</a>
              <a className="text-gray-600 hover:text-brand-red pb-2" href="#">Explorar</a>
              <a className="text-gray-600 hover:text-brand-red pb-2" href="#">Mapa</a>
              <a className="text-gray-600 hover:text-brand-red pb-2" href="#">Cinemateca</a>
              <a className="text-gray-600 hover:text-brand-red pb-2" href="#">Loja</a>
              <a className="text-gray-600 hover:text-brand-red pb-2" href="#">Academia</a>
        </div>
          </nav>
          <HeaderActionsClient />
    </header>

        <main className="max-w-7xl mx-auto px-4 pt-8 pb-24 md:pb-10">{children}</main>

        <footer className="bg-gray-800 text-gray-300 py-10 mt-8">
          <div className="max-w-7xl mx-auto px-[var(--container-px)] text-sm">© 2025 Guerra & Paz. Todos os direitos reservados.</div>
        </footer>

        <BottomTabBar />
      </ClientUiHost></UiProvider></body>
    </html>
  );
}
