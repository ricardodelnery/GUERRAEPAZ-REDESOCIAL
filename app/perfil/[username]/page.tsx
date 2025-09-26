import UserProfileHeader from '../../components/UserProfileHeader';

export default function PerfilPage({ params }: { params: { username: string } }) {
  return (
    <main style={{padding:20,fontFamily:'ui-sans-serif,system-ui'}}>
      <UserProfileHeader username={params.username} level="Recruta" />
      <div className="mt-4 text-sm text-gray-600">Fluxo de edição (mock): <button className="px-2 py-1 rounded bg-gray-100">Editar</button> → <button className="px-2 py-1 rounded bg-gray-100">Salvar</button> → <span role="status" aria-live="polite">OK</span></div>

      <h1>Perfil de @{params.username}</h1>
      <p>nível: Recruta</p>
    </main>
  );
}
