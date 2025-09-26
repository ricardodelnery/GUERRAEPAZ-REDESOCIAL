type Props = {
  author: string;
  handle: string;
  dateISO: string; // ex: 2025-09-26T12:00:00Z
  content: string;
};
export default function FeedPostCard({ author, handle, dateISO, content }: Props) {
  const date = new Date(dateISO);
  const human = date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  return (
    <article role="article" aria-label={`Post de ${author}`} className="border rounded-lg p-4 mb-4 bg-white shadow-sm">
      <header className="flex items-center justify-between mb-2">
        <div className="min-w-0">
          <h2 className="text-sm font-semibold leading-tight truncate">{author}</h2>
          <p className="text-xs text-gray-500 truncate">@{handle}</p>
        </div>
        <time className="text-xs text-gray-500" dateTime={dateISO} aria-label={`Publicado em ${human}`}>{human}</time>
      </header>
      <p className="text-sm leading-6">{content}</p>
    </article>
  );
}
