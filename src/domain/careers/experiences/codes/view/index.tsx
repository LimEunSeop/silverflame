import { getCodeItem } from '@/utils/db/careers'
import Error from 'next/error'
import { notFound } from 'next/navigation'
import CodeBlock from './CodeBlock'
import CopyButton from '@/components/buttons/CopyButton'

type Props = {
  codeId: string
}

const CareersCodesView = async ({ codeId }: Props) => {
  const code = await getCodeItem(codeId)

  if (!code) return notFound()

  return (
    <div>
      <div className="prose prose-sm max-w-none md:prose-base">
        <h1>{code.name}</h1>
        {code.descriptions.length > 0 ? (
          <ul>
            {code.descriptions.map((description, i) => (
              <li key={i}>{description}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="relative">
        <CodeBlock code={code.code} language={code.language ?? ''} />
        <div className="absolute right-2 top-2">
          <CopyButton text={code.code} />
        </div>
      </div>
    </div>
  )
}

export default CareersCodesView
