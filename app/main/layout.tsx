import MainLayout from '@/domain/main/components/layouts/MainLayout'
import { LayoutProps } from '../../.next/types/app/main/layout'

const layout = ({ children }: LayoutProps) => {
  return <MainLayout>{children}</MainLayout>
}
export default layout
