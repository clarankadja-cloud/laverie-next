import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

let prismaInstance: any = null

export function getPrisma() {
  if (!prismaInstance) {
    const isProduction = process.env.NODE_ENV === 'production'
    const maxConnections = process.env.DATABASE_POOL_MAX
      ? parseInt(process.env.DATABASE_POOL_MAX, 10)
      : (isProduction ? 2 : 10)

    const pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      max: maxConnections,
    })
    const adapter = new PrismaPg(pool)
    prismaInstance = new PrismaClient({ adapter })
  }
  return prismaInstance
}

// Lazy proxy - only connects when actually used
export const prisma = new Proxy({} as any, {
  get(_target, prop) {
    return getPrisma()[prop]
  }
})
