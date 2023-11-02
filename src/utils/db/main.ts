import 'server-only'

import prisma from '@/lib/prisma'
import { cache } from 'react'

export const getAppList = cache(async () => {
  const appList = await prisma.app.findMany()
  return appList
})
