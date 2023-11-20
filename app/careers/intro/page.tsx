import CareersIntro from '@/domain/careers/intro'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intro',
}

const CareersIntroPage = () => {
  return <CareersIntro />
}
export default CareersIntroPage
