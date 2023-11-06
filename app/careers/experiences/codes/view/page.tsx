import CareersCodesView from '@/domain/careers/experiences/codes/view'

//TODO: 앞으로의 데이터 양이 많아질 페이지라 페이지를 static 렌더링 하는데 한계가 있을것이다.
//TODO: 렌더링 최적화를 위해 loading.js 와 같은 Suspense 바운더리를 주고 나중에 로딩 UI를 꾸며보도록 하자.
export const dynamic = 'force-dynamic'

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
