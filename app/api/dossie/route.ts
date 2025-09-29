import { NextRequest, NextResponse } from 'next/server'
import { DossieSchema } from '@/lib/validation-schemas'
import rateLimit from '@/lib/rate-limit'
import { sanitizeHTML, sanitizeUserInput } from '@/lib/sanitize'

const limiter = rateLimit({
  interval: 60000,
  uniqueTokenPerInterval: 500,
})

export async function POST(request: NextRequest) {
  try {
    await limiter.check(5, request.ip ?? 'unknown')
    
    const body = await request.json()
    
    const validationResult = DossieSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Dados inválidos', 
          details: validationResult.error.issues 
        },
        { status: 400 }
      )
    }

    const { title, content, sources, conflictId } = validationResult.data
    
    // Sanitização
    const sanitizedTitle = sanitizeUserInput(title)
    const sanitizedContent = sanitizeHTML(content)
    const sanitizedSources = sources.map(url => url.trim())
    
    // Processar dossiê
    const newDossie = {
      id: Date.now().toString(),
      title: sanitizedTitle,
      content: sanitizedContent,
      sources: sanitizedSources,
      conflictId,
      createdAt: new Date().toISOString(),
      status: 'pending_review'
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Dossiê criado com sucesso',
        dossie: newDossie
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

    console.error('Erro na API de dossiê:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    await limiter.check(20, request.ip ?? 'unknown')
    
    return NextResponse.json({ dossies: [] })
    
  } catch (error: any) {
    if (error.message === 'Rate limit exceeded') {
      return NextResponse.json(
        { error: 'Muitas requisições' },
        { status: 429 }
      )
    }
    
    return NextResponse.json(
      { error: 'Erro ao buscar dossiês' },
      { status: 500 }
    )
  }
}
