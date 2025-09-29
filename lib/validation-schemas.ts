import { z } from 'zod'

export const PostSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1).max(10000),
  area: z.enum(['ARSENAL', 'CINEMATECA', 'MAPA', 'FORUM', 'BIBLIOGRAFIA']),
  category: z.string().max(50),
})

export const UserSchema = z.object({
  username: z.string().min(3).max(30).regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  password: z.string().min(8),
})

export const DossieSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1),
  sources: z.array(z.string().url()),
  conflictId: z.string().optional(),
})
