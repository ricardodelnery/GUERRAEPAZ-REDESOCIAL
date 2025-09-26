/* eslint-disable @next/next/no-img-element */
import CardActions from '../common/CardActions';

type Props = {
  area: string;
  author: string;
  avatar: string;
  title: string;
  excerpt: string;
  time: string;
};
export default function PostCard({ area, author, avatar, title, excerpt, time }: Props) {
  return (
    <article className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <img src={avatar} className="w-10 h-10 rounded-full" alt={`Avatar de ${author}`} />
          <div>
            <p className="font-semibold text-sm">{author}</p>
            <p className="text-xs text-gray-500">{time} • {area}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600" aria-label="Mais opções">•••</button>
      </div>
      <h3 className="mt-3 font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-700 mt-2">{excerpt}</p>
      <CardActions />
    </article>
  );
}
