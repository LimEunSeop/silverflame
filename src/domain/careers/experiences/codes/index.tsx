import CodeCard from './CodeCard'
import { getCodeList } from '@/utils/db/careers'

const CareersCodes = async () => {
  const codeList = await getCodeList()

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
