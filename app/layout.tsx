export const metadata = { title: "Guerra & Paz" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-svh bg-gray-100 text-gray-900">
        <header className="bg-white sticky top-0 z-50 border-b">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span aria-label="GUERRA É PAZ — logomarca oficial" className="font-black">GUERRA É PAZ</span>
            <div className="flex items-center gap-1">
              <button aria-label="Buscar" className="p-2 rounded hover:bg-gray-100">🔎</button>
              <button aria-label="Notificações" className="p-2 rounded hover:bg-gray-100">🔔</button>
              <button className="bg-red-600 text-white font-semibold py-1.5 px-3 rounded-lg text-sm">Entrar</button>
            </div>
          </div>
          <nav aria-label="Navegação secundária" className="hidden md:block bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 py-2 text-sm">
              <a className="text-red-600 font-medium" href="#">Feed</a>
              <a className="text-gray-600 hover:text-red-600" href="#">Explorar</a>
              <a className="text-gray-600 hover:text-red-600" href="#">Mapa</a>
              <a className="text-gray-600 hover:text-red-600" href="#">Cinemateca</a>
              <a className="text-gray-600 hover:text-red-600 ml-auto" href="#">Loja</a>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 pt-4 pb-24 md:pb-6">{children}</main>
        <footer className="bg-gray-800 text-gray-300 py-10 mt-8">
          <div className="max-w-7xl mx-auto px-4 text-sm">© 2025 Guerra & Paz. Todos os direitos reservados.</div>
        </footer>
      </body>
    </html>
  );
}
