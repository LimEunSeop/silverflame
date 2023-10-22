import prisma from '@/lib/prisma'

import { cache } from 'react'

const getAppList = cache(async () => {
  const appList = await prisma.app.findMany()
  return appList
})

export default getAppList
