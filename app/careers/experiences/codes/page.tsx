import CareersCodes from '@/domain/careers/experiences/codes'
import { Metadata } from 'next'

export const revalidate = 10

export const metadata: Metadata = {
  title: 'Codes',
}

const CareersCodesPage = () => {
  return <CareersCodes />
}
export default CareersCodesPage
