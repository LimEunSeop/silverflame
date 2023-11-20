import CareersResume from '@/domain/careers/resume'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume',
}

const CareersResumePage = () => {
  return <CareersResume />
}
export default CareersResumePage
