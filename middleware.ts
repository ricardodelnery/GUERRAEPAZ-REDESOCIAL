import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const WINDOW_MS = 10_000;
const LIMIT = 30;
const store: Record<string, { ts: number; count: number }> = {};

export function middleware(req: NextRequest) {
  const ip = req.ip ?? req.headers.get('x-forwarded-for') ?? 'unknown';
  const now = Date.now();
  const k = String(ip);
  const entry = store[k] ?? { ts: now, count: 0 };
  if (now - entry.ts > WINDOW_MS) { entry.ts = now; entry.count = 0; }
  entry.count += 1; store[k] = entry;

  if (entry.count > LIMIT) {
    console.log('[RATE-LIMIT]', k, entry.count);
    return new NextResponse('Too Many Requests', { status: 429, headers: { 'X-RateLimit-Window': String(WINDOW_MS), 'X-RateLimit-Limit': String(LIMIT) }});
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
