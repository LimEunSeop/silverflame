import CareersContact from '@/domain/careers/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}

const CareersContactPage = () => {
  return <CareersContact />
}
export default CareersContactPage
