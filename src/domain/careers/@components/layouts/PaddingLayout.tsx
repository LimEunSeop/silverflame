import { ReactNode } from 'react'

const PaddingLayout = ({ children }: { children: ReactNode }) => {
  return <div className="px-4 py-6 md:px-0 md:py-8">{children}</div>
}
export default PaddingLayout
