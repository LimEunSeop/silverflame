import { getCodeList } from '@/utils/db/careers'
import Link from 'next/link'
import Table from '@/domain/admin/@components/Table'
import { Code } from '@prisma/client'
import { TrashIcon } from '@heroicons/react/24/outline'
import MyPortal from '@/components/MyPortal'
import { useRef } from 'react'
import CodeList from './CodeList'

const AdminCodes = async () => {
  const codeList = await getCodeList()

  return (
    <div>
      <div className="flex justify-end">
        <Link href="/admin/careers/codes/save" className="btn btn-primary">
          Add
        </Link>
      </div>
      <CodeList codeList={codeList} />
    </div>
  )
}
export default AdminCodes
