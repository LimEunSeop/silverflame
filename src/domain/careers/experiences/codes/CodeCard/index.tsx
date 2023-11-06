import { Code } from '@prisma/client'
import CodePreview from './CodePreview'
import CopyButton from '@/components/buttons/CopyButton'
import Link from 'next/link'
import ColorHash from 'color-hash'

type Props = {
  code: Code
}

const CodeCard = ({ code }: Props) => {
  const colorHash = new ColorHash({ lightness: [0.35, 0.5, 0.65] })

  return (
    <div className="card w-full bg-base-100 shadow-xl dark:bg-base-200 sm:w-72 md:w-80 lg:w-96">
      <figure className="relative">
        <CodePreview code={code.code} language={code.language ?? ''} />

        <div className="absolute right-2 top-2">
          <CopyButton text={code.code} />
        </div>
      </figure>
      <Link href={`/careers/experiences/codes/view?codeId=${code.id}` as any}>
        <div className="card-body">
          <h2 className="card-title">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">{code.name}</span>
            {code.language ? (
              <div className="badge" style={{ background: colorHash.hex(code.language), color: '#fff' }}>
                {code.language}
              </div>
            ) : null}
          </h2>
          <p className="overflow-hidden text-ellipsis">{code.descriptions.at(0)}</p>
          <div className="card-actions justify-end">
            {code.tags.map((tag) => (
              <div key={tag} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
export default CodeCard
