'use client';
import LeftRail from './LeftRail';
import RightRail from './RightRail';
import PostCard from './PostCard';
import Composer from './Composer';
import StoriesRow from './StoriesRow';
import BottomTabBar from './BottomTabBar';
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
        <div className="grid grid-cols-12 gap-6">
<aside className="hidden lg:block lg:col-span-3"><LeftRail /></aside>
<section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-6">
<div className="bg-white p-3 rounded-lg shadow-sm"><StoriesRow /></div>
<Composer />
<div className="space-y-4">
  <PostCard area="Cinemateca" time="2d" author="Especialista em Desinformação" avatar="https://placehold.co/40x40/A5B4FC/3730A3?text=ED" title="A narrativa em 'The Social Dilemma' e a Doutrina da Punição" excerpt="Como enquadramentos emocionais moldam percepções públicas..." />
  <PostCard area="Arsenal" time="1d" author="Agente Analítico" avatar="https://placehold.co/40x40/C4B5FD/4338CA?text=AA" title="Expandindo o Capítulo 6: a 'Guerra de Asfixia'" excerpt="Políticas de tarifas com impacto na soberania industrial..." />
</div>
<p className="text-sm text-gray-600">Rota /sim-v35 ativa. Pronta para receber os blocos completos.</p>
      </section>
<aside className="hidden md:block md:col-span-4 lg:col-span-3"><RightRail /></aside>
</div>
</main>
      <BottomTabBar />
</div>
  );
}
