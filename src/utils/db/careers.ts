import 'server-only'

import prisma from '@/lib/prisma'
import { cache } from 'react'
import { Code } from '@prisma/client'

export const getCodeList = cache(async () => {
  return await prisma.code.findMany({
    // orderBy: {
    //   updatedAt: 'desc',
    // },
  })
})

export const getCodeItem = cache(async (id: Code['id']) => {
  return await prisma.code.findUnique({
    where: {
      id,
    },
  })
})

export const getProjectList = cache(async () => {
  const projectList = await prisma.project.findMany({
    include: {
      images: true,
    },
  })

  return projectList
})
