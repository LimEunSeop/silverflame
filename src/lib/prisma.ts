import { PrismaClient } from '@prisma/client'

declare global {
  var dbClient: PrismaClient // This must be a `var` and not a `let / const`
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.dbClient) {
    global.dbClient = new PrismaClient()
  }
  prisma = global.dbClient
}

export default prisma
