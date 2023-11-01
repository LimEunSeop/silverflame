import Link from 'next/link'
import { MouseEventHandler } from 'react'

const AdminCodes = () => {
  return (
    <div>
      <div className="flex justify-end">
        <Link href="/admin/careers/codes/save" className="btn btn-primary">
          Add
        </Link>
      </div>
    </div>
  )
}
export default AdminCodes
