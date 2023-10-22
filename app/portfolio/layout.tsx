import MainLayout from '@/domain/portfolio/@components/layouts/MainLayout'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>
}
export default layout
