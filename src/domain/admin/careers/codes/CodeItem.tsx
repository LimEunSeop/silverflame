'use client'

import { TrashIcon } from '@heroicons/react/24/outline'
import { Code } from '@prisma/client'
import deleteCodeAction from './@actions/deleteCodeAction'
import Link from 'next/link'
import { MouseEventHandler, useRef } from 'react'
import moment from 'moment-timezone'
import UTCToLocal from '@/components/data-display/UTCToLocal'

type Props = {
  item: Code
}

const CodeItem = ({ item }: Props) => {
  const formRef = useRef<HTMLFormElement>(null)

  const deleteCodeWithId = deleteCodeAction.bind(null, item.id)

  const handleDeleteButtonClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (window.confirm('삭제하시겠습니까?')) {
      formRef.current?.submit()
    }
  }

  return (
    <>
      <td>
        <Link href={`/admin/careers/codes/save?codeId=${item.id}`} className="link">
          {item.name}
        </Link>
      </td>
      <td>{item.language}</td>
      <td>{item.tags.join(',')}</td>
      <td>{item.descriptions.join('-').slice(0, 50)}</td>
      {/* <td>
        <UTCToLocal date={item.createdAt} />
      </td>
      <td>
        <UTCToLocal date={item.updatedAt} />
      </td> */}
      <td>
        <form ref={formRef} action={deleteCodeWithId}>
          <button type="button" className="btn btn-square btn-ghost" onClick={handleDeleteButtonClicked}>
            <TrashIcon className="h-6 w-6" />
          </button>
        </form>
      </td>
    </>
  )
}

export default CodeItem
