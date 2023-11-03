import prisma from '@/lib/prisma'
import { getCodeItem } from '@/utils/db/careers'
import { Code } from '@prisma/client'
import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { ZodError, z } from 'zod'

const codeSchema = z.object({
  id: z.string().transform((val) => val || undefined),
  name: z.string().min(1),
  descriptions: z.string().transform((val) => (val ? val.split('\r\n') : undefined)),
  code: z.string().min(1),
  language: z.string().transform((val) => val || undefined),
  tags: z.string().transform((val) => (val ? val.split(',') : undefined)),
})

type Props = {
  codeId?: string
}

const AdminCodeSave = async ({ codeId }: Props) => {
  let code: Code | null = null

  if (codeId) {
    code = await getCodeItem(codeId)
  }

  async function saveCode(formData: FormData) {
    'use server'

    const parsedResult = codeSchema.parse(Object.fromEntries(formData))
    const { id, ...data } = parsedResult

    if (id) {
      await prisma.code.update({
        where: { id },
        data,
      })
    } else {
      await prisma.code.create({
        data,
      })
    }
    revalidatePath('/admin/careers/code')
    redirect('/admin/careers/codes')
  }

  return (
    <div className="prose max-w-none">
      <form action={saveCode}>
        <input type="hidden" name="id" value={codeId} />

        <div className="flex justify-between">
          <h1>{codeId ? 'Edit' : 'Add'}</h1>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex-1">
            <label htmlFor="input-name" className="label">
              <span className="label-text">name</span>
            </label>
            <input
              id="input-name"
              type="text"
              name={'name' satisfies keyof Code}
              defaultValue={code?.name}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="input-tags" className="label">
              <span className="label-text">tags (쉼표 구분)</span>
            </label>
            <input
              id="input-tags"
              type="text"
              // name={'tags' satisfies keyof Code}
              name="tags"
              defaultValue={code?.tags.join(',')}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="input-language" className="label">
              <span className="label-text">language</span>
            </label>
            <input
              id="input-language"
              type="text"
              name={'language' satisfies keyof Code}
              defaultValue={code?.language ?? ''}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <label htmlFor="input-descriptions" className="label">
          <span className="label-text">descriptions (줄바꿈 구분)</span>
        </label>
        <textarea
          id="input-descriptions"
          name="descriptions"
          defaultValue={code?.descriptions.join('\n')}
          className="textarea textarea-bordered textarea-xs h-32 w-full"
        ></textarea>

        <label htmlFor="input-code" className="label">
          <span className="label-text">code</span>
        </label>
        <textarea
          id="input-code"
          name={'code' satisfies keyof Code}
          defaultValue={code?.code}
          className="textarea textarea-bordered textarea-xs h-80 w-full"
        ></textarea>
      </form>
    </div>
  )
}
export default AdminCodeSave
