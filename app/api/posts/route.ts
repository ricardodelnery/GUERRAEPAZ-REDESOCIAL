import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/db'
import { z } from 'zod'

const postSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1),
  area: z.enum(['ARSENAL', 'CINEMATECA', 'MAPA', 'FORUM', 'BIBLIOGRAFIA']),
  category: z.string().optional().default('GENERAL')
})

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
            name: true,
            avatar: true,
            level: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = postSchema.parse(body)

    // TEMPORARY: Return success without database write
    return NextResponse.json({
      success: true,
      message: 'Post criado com sucesso (modo de desenvolvimento)',
      data: validatedData
    })

  } catch (error) {
    console.error('Error creating post:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.issues },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
