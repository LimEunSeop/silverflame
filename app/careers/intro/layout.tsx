import PaddingLayout from '@/domain/careers/@components/layouts/PaddingLayout'
import { ReactNode } from 'react'

const CareersIntroLayout = ({ children }: { children: ReactNode }) => {
  return <PaddingLayout>{children}</PaddingLayout>
}
export default CareersIntroLayout
