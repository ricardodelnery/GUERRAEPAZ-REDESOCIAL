'use client';
import { useRouter } from 'next/navigation';
export default function Entrar() {
  const router = useRouter();
  function loginDemo() {
    localStorage.setItem('gp_auth', JSON.stringify({ email: 'demo@user' }));
    router.push('/dashboard');
  }
  return (
    <main style={{padding:20,fontFamily:'ui-sans-serif,system-ui'}}>
      <h2>Entrar</h2>
      <p>Login de demonstração (sem backend)</p>
      <button onClick={loginDemo}>Entrar como demo</button>
    </main>
  );
}
