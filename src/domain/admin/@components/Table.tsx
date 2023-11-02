import { ReactNode } from 'react'

type HeadCell<ListItem> = {
  id: Extract<keyof ListItem, string>
  label: string
}

type Props<ListItem> = {
  headCells: HeadCell<ListItem>[]
  items: ListItem[]
  renderItem: (item: ListItem) => ReactNode
  page?: number
  pageSize?: number
}

const Table = <ListItem extends { id: string | number }>({
  headCells,
  items,
  renderItem,
  page = 0,
  pageSize = 0,
}: Props<ListItem>) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            {headCells.map((headCell) => (
              <th key={headCell.id}>{headCell.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={item.id}>
              <th>{(page - 1) * pageSize + (idx + 1)}</th>
              {renderItem(item)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Table
