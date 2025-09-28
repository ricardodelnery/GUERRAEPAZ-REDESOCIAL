// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Criar badges básicas
  const badges = await prisma.badge.createMany({
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
        icon: '��',
        rarity: 'COMMON'
      }
    ],
    skipDuplicates: true
  })

  // Criar missões iniciais
  const missions = await prisma.mission.createMany({
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

  console.log('Seed data criado com sucesso!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
