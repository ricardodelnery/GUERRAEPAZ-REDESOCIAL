import ProfileCompact from './ProfileCompact'
import Shortcuts from './Shortcuts'
import GroupsAccordion from './GroupsAccordion'
import StoreCard from './StoreCard'
import EventsCard from './EventsCard'
import Recommendations from './Recommendations'
import PostCard from './PostCard'

export default function HomeMain() {
  return (
    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto px-4">
      {/* LEFT SIDEBAR - Desktop apenas */}
      <aside className="hidden lg:block lg:col-span-3">
        <div className="sticky top-24 space-y-4">
          <ProfileCompact />
          <Shortcuts />
          <GroupsAccordion />
        </div>
      </aside>

      {/* FEED PRINCIPAL */}
      <section className="col-span-12 lg:col-span-6 space-y-6">
        {/* Stories Carrossel */}
        <div className="bg-white p-3 rounded-lg shadow-sm flex gap-3 overflow-x-auto no-scrollbar">
          {[
            { title: "Análise: Ucrânia", bg: "https://placehold.co/112x112/334155/ffffff?text=Ucrânia" },
            { title: "Update: Sahel", bg: "https://placehold.co/112x112/44403c/ffffff?text=Sahel" },
            { title: "Podcast #23", bg: "https://placehold.co/112x112/57534e/ffffff?text=Podcast" },
            { title: "Live Q&A", bg: "https://placehold.co/112x112/78716c/ffffff?text=Live" },
            { title: "Artigo novo", bg: "https://placehold.co/112x112/a8a29e/ffffff?text=Artigo" }
          ].map((story, i) => (
            <div key={i} className="flex-shrink-0 w-28 h-28 rounded-lg bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${story.bg})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold line-clamp-2">{story.title}</div>
            </div>
          ))}
        </div>

        {/* Composer */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <img src="https://placehold.co/48x48/e2e8f0/334155?text=VS" className="w-12 h-12 rounded-full" alt="Seu avatar" />
            <div className="flex-1">
              <textarea 
                placeholder="O que estás a pensar?" 
                className="w-full resize-none bg-gray-100 p-3 rounded-lg focus:outline-none text-sm"
                rows={3}
              />
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-2 text-gray-500">
                  <button className="p-2 rounded-full hover:bg-gray-100">📎</button>
                  <button className="p-2 rounded-full hover:bg-gray-100">📷</button>
                  <button className="p-2 rounded-full hover:bg-gray-100">📍</button>
                </div>
                <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-red-700">
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feed de Posts */}
        <div className="space-y-4">
          <PostCard 
            area="Cinemateca" 
            time="2d" 
            author="Especialista em Desinformação" 
            avatar="https://placehold.co/40x40/A5B4FC/3730A3?text=ED" 
            title="A narrativa em 'The Social Dilemma' e a Doutrina da Punição" 
            excerpt="Como enquadramentos emocionais moldam percepções públicas e desviam a atenção de questões estruturais..."
          />
          <PostCard 
            area="Arsenal" 
            time="1d" 
            author="Agente Analítico" 
            avatar="https://placehold.co/40x40/C4B5FD/4338CA?text=AA" 
            title="Expandindo o Capítulo 6: a 'Guerra de Asfixia'" 
            excerpt="Políticas de tarifas com impacto na soberania industrial — uma leitura crítica das sanções..."
          />
        </div>

        {/* Mobile-only components */}
        <div className="space-y-4 lg:hidden">
          <StoreCard />
          <EventsCard />
          <Shortcuts />
          <GroupsAccordion />
        </div>
      </section>

      {/* RIGHT SIDEBAR - Desktop apenas */}
      <aside className="hidden lg:block lg:col-span-3">
        <div className="sticky top-24 space-y-4">
          <Recommendations />
          <StoreCard />
          <EventsCard />
        </div>
      </aside>
    </div>
  )
}
