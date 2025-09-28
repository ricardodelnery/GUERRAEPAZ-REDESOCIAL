export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid de 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Navegação */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Arsenal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cinemateca</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mapa de Conflitos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fórum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bibliografia</a></li>
            </ul>
          </div>

          {/* Comunidade */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Comunidade</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Ranking de Agentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Missões Ativas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diretrizes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regras da Comunidade</a></li>
            </ul>
          </div>

          {/* Sobre */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Sobre</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">O Projeto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Metodologia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Equipa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acessibilidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Divisor e copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Marca */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">G&P</span>
              </div>
              <span className="font-bold text-white">
                <span>GUERRA</span>
                <span className="text-red-400"> & </span>
                <span>PAZ</span>
              </span>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>© 2025 Guerra & Paz. Todos os direitos reservados.</p>
              <p className="text-xs mt-1">Soberania intelectual através da gamificação</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
