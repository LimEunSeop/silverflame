import prisma from '@/lib/prisma'
import { cache } from 'react'

const getProjectList = cache(async () => {
  const projectList = await prisma.project.findMany({
    include: {
      images: true,
    },
  })

  return projectList
})

export default getProjectList
