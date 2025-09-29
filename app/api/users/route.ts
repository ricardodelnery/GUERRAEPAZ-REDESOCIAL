import { NextRequest, NextResponse } from 'next/server'
import rateLimit from '@/lib/rate-limit'

const limiter = rateLimit({
  interval: 60000,
  uniqueTokenPerInterval: 500,
})

export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    await limiter.check(20, request.ip ?? 'unknown')
    
    // Mock data para desenvolvimento
    const mockUsers = [
      { id: 1, username: 'operador1', level: 'Operador', xp: 1240 },
      { id: 2, username: 'analista2', level: 'Agente', xp: 2850 }
    ]
    
    return NextResponse.json({ users: mockUsers })
    
  } catch (error: any) {
    if (error.message === 'Rate limit exceeded') {
      return NextResponse.json(
        { error: 'Muitas requisições. Tente novamente em 1 minuto.' },
        { status: 429 }
      )
    }

    console.error('Erro na API de users:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
