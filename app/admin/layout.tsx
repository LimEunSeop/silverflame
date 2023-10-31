import { ReactNode } from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/next-auth'

import MainLayout from '@/domain/admin/@components/layouts/MainLayout'

const AdminRootLayout = async ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>
}
export default AdminRootLayout
