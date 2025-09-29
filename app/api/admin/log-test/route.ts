import { NextRequest, NextResponse } from 'next/server'
import rateLimit from '@/lib/rate-limit'

const limiter = rateLimit({
  interval: 60000,
  uniqueTokenPerInterval: 100,
})

export async function POST(request: NextRequest) {
  try {
    // Rate limiting mais restritivo para admin
    await limiter.check(3, request.ip ?? 'unknown')
    
    const body = await request.json()
    const { message, level = 'info' } = body
    
    // Validação básica
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Mensagem de log é obrigatória' },
        { status: 400 }
      )
    }
    
    // Sanitizar e limitar tamanho
    const sanitizedMessage = message.substring(0, 1000).replace(/[<>]/g, '')
    const validLevels = ['info', 'warn', 'error']
    const logLevel = validLevels.includes(level) ? level : 'info'
    
    // Simular logging seguro
    console.log(`[ADMIN ${logLevel.toUpperCase()}] ${sanitizedMessage}`)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Log registrado com sucesso',
        log: {
          message: sanitizedMessage,
          level: logLevel,
          timestamp: new Date().toISOString()
        }
      },
      { status: 201 }
    )

  } catch (error: any) {
    if (error.message === 'Rate limit exceeded') {
      return NextResponse.json(
        { error: 'Muitas requisições. Tente novamente em 1 minuto.' },
        { status: 429 }
      )
    }

    console.error('Erro na API de admin:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    await limiter.check(10, request.ip ?? 'unknown')
    
    return NextResponse.json({ logs: [] })
    
  } catch (error: any) {
    if (error.message === 'Rate limit exceeded') {
      return NextResponse.json(
        { error: 'Muitas requisições' },
        { status: 429 }
      )
    }
    
    return NextResponse.json(
      { error: 'Erro ao buscar logs' },
      { status: 500 }
    )
  }
}
