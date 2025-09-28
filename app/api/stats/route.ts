// app/api/stats/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const [
      totalUsers,
      totalPosts,
      totalComments,
      activeMissions
    ] = await Promise.all([
      prisma.user.count(),
      prisma.post.count(),
      prisma.comment.count(),
      prisma.mission.count()
    ])

    return NextResponse.json({
      totalUsers,
      totalPosts,
      totalComments,
      activeMissions,
      platformStats: {
        // Estatísticas que aparecem na homepage
        activeToday: totalUsers, // Temporário
        analysesCreated: totalPosts,
        communityGrowth: '15%' // Temporário
      }
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
