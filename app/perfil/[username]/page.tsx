export default function PerfilPage({ params }: { params: { username: string } }) {
  return (
    <main style={{padding:20,fontFamily:'ui-sans-serif,system-ui'}}>
      <h1>Perfil de @{params.username}</h1>
      <p>nível: Recruta</p>
    </main>
  );
}
