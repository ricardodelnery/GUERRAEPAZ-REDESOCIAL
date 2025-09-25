export default function Home() {
  return (
    <main style={{padding:20,fontFamily:'ui-sans-serif,system-ui'}}>
      <h1>GUERRA & PAZ — Social</h1>
      <p>Deploy em produção funcionando ✅</p>
      <ul>
        <li><a href="/entrar">/entrar (login)</a></li>
        <li><a href="/dashboard">/dashboard</a></li>
        <li><a href="/api/dossie?limit=2">/api/dossie?limit=2</a></li>
      </ul>
    </main>
  );
}
