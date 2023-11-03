import { Code } from '@prisma/client'
import Table from '@/domain/admin/@components/Table'
import CodeItem from './CodeItem'

type Props = {
  codeList: Code[]
}

const CodeList = ({ codeList }: Props) => {
  return (
    <>
      <Table
        items={codeList}
        headCells={[
          { id: 'name', label: 'name' },
          { id: 'language', label: 'language' },
          { id: 'tags', label: 'tags' },
          { id: 'descriptions', label: 'descriptions' },
        ]}
        renderItem={(item) => <CodeItem item={item} />}
      />
    </>
  )
}
export default CodeList
