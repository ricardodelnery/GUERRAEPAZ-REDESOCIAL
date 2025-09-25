export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const limit = Math.max(1, Math.min(50, Number(searchParams.get('limit') ?? 3)));
  const items = Array.from({ length: limit }, (_, i) => ({
    id: i + 1, title: `Item ${i + 1}`
  }));
  return Response.json({ ok: true, count: items.length, items });
}
