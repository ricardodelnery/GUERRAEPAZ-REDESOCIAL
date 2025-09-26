'use client';
function Story({ title, bg }: { title: string; bg: string }) {
  return (
    <div className="min-w-[112px] h-28 rounded-lg bg-cover bg-center relative overflow-hidden text-white flex items-end p-2"
         style={{ backgroundImage: `url(${bg})` }} role="img" aria-label={title}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="z-10 font-semibold text-xs line-clamp-2">{title}</div>
    </div>
  );
}
export default function StoriesRow() {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar">
      <Story title="Análise: Ucrânia" bg="https://placehold.co/120x112/334155/ffffff?text=Ucr%C3%A2nia" />
      <Story title="Update: Sahel"   bg="https://placehold.co/120x112/44403c/ffffff?text=Sahel" />
      <Story title="Podcast #23"     bg="https://placehold.co/120x112/57534e/ffffff?text=Podcast" />
      <Story title="Live Q&A"        bg="https://placehold.co/120x112/78716c/ffffff?text=Live" />
      <Story title="Artigo novo"     bg="https://placehold.co/120x112/a8a29e/ffffff?text=Artigo" />
    </div>
  );
}
