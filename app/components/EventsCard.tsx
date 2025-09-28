export default function EventsCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold text-sm mb-2">Eventos</h4>
      <div className="space-y-2 text-xs">
        <div className="p-2 bg-blue-50 rounded-lg">
          <p className="font-medium">Análise Coletiva</p>
          <p className="text-gray-600">'Crise 2008' — 26 Set</p>
        </div>
        <div className="p-2 bg-green-50 rounded-lg">
          <p className="font-medium">Live Q&A</p>
          <p className="text-gray-600">Com autores — 30 Set</p>
        </div>
      </div>
    </div>
  )
}
