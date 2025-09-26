import Story from "@/components/common/Story";
import Composer from "@/components/home/Composer";

export default function HomeV2() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
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
    </div>
  );
}
