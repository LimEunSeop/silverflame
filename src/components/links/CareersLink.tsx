import Link from 'next/link'
import { UserIcon } from '@heroicons/react/24/outline'

const CareersLink = () => {
  return (
    <Link href="/careers" className="btn btn-square btn-ghost">
      <UserIcon className="h-6 w-6" />
    </Link>
  )
}
export default CareersLink
