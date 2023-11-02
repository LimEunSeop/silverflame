import CareersCodesView from '@/domain/careers/experiences/codes/view'

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
