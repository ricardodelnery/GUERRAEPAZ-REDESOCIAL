import BrandMarkOfficial from './components/BrandMarkOfficial'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <BrandMarkOfficial />
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            Guerra & Paz - Soberania Intelectual
          </h1>
          <p className="mt-2 text-gray-600">
            Plataforma de análise crítica e desconstrução de narrativas
          </p>
          <div className="mt-6">
            <a 
              href="/sim-v35" 
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
            >
              Acessar Plataforma
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
