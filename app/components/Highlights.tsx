export default function Highlights() {
  const Item = ({ t, s }: { t: string; s: string }) => (
    <div className="min-w-48 rounded-xl p-4 text-white bg-gradient-to-b from-slate-800 to-black snap-start">
      <div className="text-[17px] font-semibold tracking-tight">{t}</div>
      <div className="text-[12px] opacity-85 mt-1">{s}</div>
    </div>
  );
  return (
    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory">
        <Item t="Ucrânia" s="Análise: Ucrânia" />
        <Item t="Sahel" s="Update: Sahel" />
        <Item t="Podcast" s="Podcast #23" />
        <Item t="Live" s="Live Q&A" />
        <Item t="Artigo" s="Artigo novo" />
      </div>
      <div className="h-1 rounded bg-black/10 shadow-inner mt-2" />
    </div>
  );
}
