export const dynamic = 'force-dynamic';

function getProcessStats() {
  const mem = process.memoryUsage();
  return {
    uptimeSec: Math.round(process.uptime()),
    memoryMB: Math.round(mem.rss / 1024 / 1024),
  };
}

export async function GET() {
  try {
    const app = getProcessStats();
    const thresholds = { uptimeSecMin: 10, memoryMBMax: 1024 };
    const status = app.uptimeSec >= thresholds.uptimeSecMin && app.memoryMB <= thresholds.memoryMBMax
      ? 'ok'
      : 'degraded';

    const body = {
      status,
      checks: {
        app,
        db: { status: 'skipped', note: 'sem DB ainda' },
        external: { status: 'skipped' }
      }
    };

    return new Response(JSON.stringify(body), {
      status: status === 'ok' ? 200 : 503,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  } catch (error) {
    console.error('Erro no health check:', error);
    return new Response(JSON.stringify({ status: 'error', error: 'Health check failed' }), {
      status: 500,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }
}
