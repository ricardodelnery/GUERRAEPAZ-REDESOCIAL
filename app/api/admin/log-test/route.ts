import { NextResponse } from 'next/server';
import { adminLog } from '@/utils/logger';
export async function GET() {
  adminLog('log-test ok', new Date().toISOString());
  return NextResponse.json({ ok: true });
}
