import prisma from '@/lib/prisma'
import CodeCard from './CodeCard'

const CareersCodes = async () => {
  const codeList = await prisma.code.findMany()

  return (
    <div className="flex justify-center">
      <div className="inline-grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {codeList.map((code) => (
          <CodeCard key={code.id} code={code} />
        ))}
      </div>
    </div>
  )
}
export default CareersCodes
