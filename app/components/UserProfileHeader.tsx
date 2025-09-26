type Props = {
  username: string;
  level?: 'Recruta' | 'Operador';
  displayName?: string;
};
export default function UserProfileHeader({ username, level='Recruta', displayName }: Props) {
  const name = displayName || username.replace(/^@?/, '');
  const initials = name.slice(0,2).toUpperCase();
  return (
    <section aria-label="Cabeçalho de Perfil" className="bg-white border rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div aria-label="Avatar" className="h-14 w-14 rounded-full bg-gray-100 grid place-items-center font-bold text-gray-700">{initials}</div>
        <div className="min-w-0">
          <h1 className="text-lg font-semibold leading-tight truncate">{displayName || name}</h1>
          <p className="text-sm text-gray-500 truncate">@{name} · nível {level}</p>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 hover:bg-gray-200" aria-label="Editar perfil (mock)">Editar</button>
          <button className="px-3 py-1 text-sm rounded-lg bg-brand-red text-white hover:opacity-90" aria-label="Seguir (mock)">Seguir</button>
        </div>
      </div>
    </section>
  );
}
