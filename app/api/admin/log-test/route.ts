import { NextResponse } from 'next/server';
import { adminLog } from '../../../../utils/logger';

export async function GET() {
  try {
    adminLog('log-test ok', new Date().toISOString());
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erro no log-test:', error);
    return NextResponse.json(
      { error: 'Falha no serviço de logs' },
      { status: 500 }
    );
  }
}
