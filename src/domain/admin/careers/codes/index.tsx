import { getCodeList } from '@/utils/db/careers'
import Link from 'next/link'
import Table from '@/domain/admin/@components/Table'
import { Code } from '@prisma/client'

const CodeTableItem = ({ item }: { item: Code }) => (
  <>
    <td>
      <Link href={`/admin/careers/codes/save?codeId=${item.id}`} className="link">
        {item.name}
      </Link>
    </td>
    <td>{item.language}</td>
    <td>{item.tags.join(',')}</td>
    <td>{item.descriptions.join('-').slice(0, 50)}</td>
  </>
)

const AdminCodes = async () => {
  const codeList = await getCodeList()

  return (
    <div>
      <div className="flex justify-end">
        <Link href="/admin/careers/codes/save" className="btn btn-primary">
          Add
        </Link>
      </div>
      <Table
        items={codeList}
        headCells={[
          { id: 'name', label: 'name' },
          { id: 'language', label: 'language' },
          { id: 'tags', label: 'tags' },
          { id: 'descriptions', label: 'descriptions' },
        ]}
        renderItem={(item) => <CodeTableItem item={item} />}
      />
    </div>
  )
}
export default AdminCodes
