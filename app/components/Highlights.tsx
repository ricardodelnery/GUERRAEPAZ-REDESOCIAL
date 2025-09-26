export default function Highlights() {
  const Item = ({ t, s }: { t: string; s: string }) => (
    <div className="min-w-40 bg-black text-white rounded-xl p-3">
      <div className="text-lg font-semibold">{t}</div>
      <div className="text-[11px] opacity-80 mt-1">{s}</div>
    </div>
  );
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        <Item t="Ucrânia" s="Análise: Ucrânia" />
        <Item t="Sahel" s="Update: Sahel" />
        <Item t="Podcast" s="Podcast #23" />
        <Item t="Live" s="Live Q&A" />
      </div>
      <div className="h-1 rounded bg-gray-200 mt-2" />
    </div>
  );
}
