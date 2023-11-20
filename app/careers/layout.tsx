import MainLayout from '@/domain/careers/@components/layouts/MainLayout'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s | Silverflame Careers',
    absolute: 'Silverflame Careers',
  },
}

const IntroLayout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>
}
export default IntroLayout
