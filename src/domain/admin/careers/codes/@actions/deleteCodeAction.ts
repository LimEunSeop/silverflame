'use server'

import { z } from 'zod'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export default async function deleteCodeAction(id: string) {
  await prisma.code.delete({
    where: {
      id,
    },
  })

  revalidatePath('/admin/careers/codes')
}
