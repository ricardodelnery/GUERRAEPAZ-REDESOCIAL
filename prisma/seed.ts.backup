// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Criar usuário de teste
  const testUser = await prisma.user.upsert({
    where: { email: 'test@guerraepaz.com' },
    update: {},
    create: {
      email: 'test@guerraepaz.com',
      username: 'testuser',
      name: 'Utilizador de Teste',
      level: 'OPERATOR',
      xp: 1240,
    },
  })

  // Criar badges básicas
  await prisma.badge.createMany({
    data: [
      {
        name: 'Recruta',
        description: 'Primeiro acesso na plataforma',
        icon: '🪖',
        rarity: 'COMMON'
      },
      {
        name: 'Operador',
        description: 'Ativou acesso premium',
        icon: '🎯',
        rarity: 'RARE'
      },
      {
        name: 'Analista',
        description: 'Publicou primeira análise',
        icon: '🔍',
        rarity: 'COMMON'
      }
    ],
    skipDuplicates: true
  })

  // Criar missões iniciais
  await prisma.mission.createMany({
    data: [
      {
        title: 'Primeiro Post',
        description: 'Crie seu primeiro post na comunidade',
        xpReward: 50,
        area: 'FORUM'
      },
      {
        title: 'Explorador do Arsenal',
        description: 'Leia 5 capítulos do Arsenal',
        xpReward: 100,
        area: 'ARSENAL'
      },
      {
        title: 'Analista Iniciante',
        description: 'Complete uma análise na Cinemateca',
        xpReward: 75,
        area: 'CINEMATECA'
      }
    ],
    skipDuplicates: true
  })

  // Criar posts de exemplo
  await prisma.post.createMany({
    data: [
      {
        title: 'Bem-vindo à Guerra & Paz!',
        content: 'Esta é a primeira publicação na nossa plataforma. Aqui vamos discutir geopolítica, análise de mídia e muito mais.',
        area: 'FORUM',
        authorId: testUser.id
      },
      {
        title: 'Análise: Técnicas de Propaganda Moderna',
        content: 'Um estudo sobre como as técnicas de propaganda evoluíram na era digital...',
        area: 'ARSENAL',
        authorId: testUser.id
      },
      {
        title: 'Mapa de Conflitos - Atualização Setembro 2025',
        content: 'Principais focos de tensão geopolítica este mês...',
        area: 'MAPA',
        authorId: testUser.id
      }
    ],
    skipDuplicates: true
  })

  console.log('✅ Seed data criado com sucesso!')
  console.log('👤 Utilizador de teste: test@guerraepaz.com')
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
