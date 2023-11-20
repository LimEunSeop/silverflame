import CareersPortfolio from '@/domain/careers/experiences/portfolio'
import { Metadata } from 'next'

export const revalidate = 10

export const metadata: Metadata = {
  title: 'Portfolio',
}

const CareersPortfolioPage = () => {
  return <CareersPortfolio />
}
export default CareersPortfolioPage
