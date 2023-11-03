'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

function* findIndexAll(str: string, searchElement: string) {
  let foundIndex = -1

  do {
    foundIndex = str.indexOf(searchElement, foundIndex + 1)

    if (foundIndex !== -1) {
      yield foundIndex
    }
  } while (foundIndex > -1)
}

const BreadCrumbs = () => {
  const pathname = usePathname()

  const slashPositions = [...findIndexAll(pathname, '/')]

  return (
    <div className="breadcrumbs px-4 text-sm">
      <ul>
        {pathname.split('/').map((linkName, i) => {
          if (i === 0) return null

          return (
            <li key={linkName}>
              <Link href={pathname.slice(0, slashPositions[i]) as any}>{linkName}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default BreadCrumbs
