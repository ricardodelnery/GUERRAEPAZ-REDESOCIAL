export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  } catch (error) {
    console.error('Erro no health check básico:', error);
    return new Response(JSON.stringify({ ok: false, error: 'Service unavailable' }), {
      status: 503,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }
}
