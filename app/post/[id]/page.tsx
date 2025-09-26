export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <main style={{padding:20,fontFamily:'ui-sans-serif,system-ui'}}>
      <h1>Post #{params.id}</h1>
      <article><p>Conteúdo estático de teste.</p></article>
    </main>
  );
}
