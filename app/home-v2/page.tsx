// server component por padrão (sem "use client")
import Story from '../../components/common/Story';
import Composer from '../../components/home/Composer';
import PostCard from '../../components/home/PostCard';
import LeftRailStatic from '../../components/home/LeftRailStatic';
import RightRailStatic from '../../components/home/RightRailStatic';

export default function HomeV2() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT SIDEBAR — lg+ */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24">
            <LeftRailStatic />
          </div>
        </aside>

        {/* FEED (coluna central) */}
        <section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-6">
          {/* Stories row */}
          <div className="bg-white p-3 rounded-lg shadow-sm flex gap-3 overflow-x-auto no-scrollbar">
            <Story title="Análise: Ucrânia" bg="https://placehold.co/120x112/334155/ffffff?text=Ucr%C3%A2nia" />
            <Story title="Update: Sahel"   bg="https://placehold.co/120x112/44403c/ffffff?text=Sahel" />
            <Story title="Podcast #23"     bg="https://placehold.co/120x112/57534e/ffffff?text=Podcast" />
            <Story title="Live Q&A"        bg="https://placehold.co/120x112/78716c/ffffff?text=Live" />
            <Story title="Artigo novo"     bg="https://placehold.co/120x112/a8a29e/ffffff?text=Artigo" />
          </div>

          {/* Composer */}
          <Composer />

          {/* Feed (2 posts de exemplo) */}
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
              excerpt="Tarifas, sanções e soberania industrial — leitura crítica do alinhamento com a estratégia de asfixia..."
            />
          </div>
        </section>

        {/* RIGHT SIDEBAR — md+ */}
        <aside className="hidden md:block md:col-span-4 lg:col-span-3">
          <div className="sticky top-24">
            <RightRailStatic />
          </div>
        </aside>
      </div>
    </div>
  );
}
