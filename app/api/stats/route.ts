import { NextRequest, NextResponse } from 'next/server'
import rateLimit from '@/lib/rate-limit'

const limiter = rateLimit({
  interval: 60000,
  uniqueTokenPerInterval: 500,
})

export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    await limiter.check(30, request.ip ?? 'unknown')
    
    // Em desenvolvimento, retornar stats mockados
    const mockStats = {
      totalUsers: 42,
      totalPosts: 128,
      activeMissions: 12,
      platformHealth: 'operational'
    }
    
    return NextResponse.json(mockStats)
    
  } catch (error: any) {
    if (error.message === 'Rate limit exceeded') {
      return NextResponse.json(
        { error: 'Muitas requisições. Tente novamente em 1 minuto.' },
        { status: 429 }
      )
    }

    console.error('Erro na API de stats:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
