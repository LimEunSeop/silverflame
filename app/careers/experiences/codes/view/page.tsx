import CareersCodesView from '@/domain/careers/experiences/codes/view'

export const revalidate = 60

const CareersCodesViewPage = ({
  searchParams,
}: {
  searchParams: {
    codeId: string
  }
}) => {
  return <CareersCodesView codeId={searchParams.codeId} />
}
export default CareersCodesViewPage
