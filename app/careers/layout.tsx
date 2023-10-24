import MainLayout from '@/domain/careers/@components/layouts/MainLayout'
import { ReactNode } from 'react'

const IntroLayout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>
}
export default IntroLayout
