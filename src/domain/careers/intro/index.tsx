import Image from 'next/image'
import Link from 'next/link'

const CareersIntro = () => {
  return (
    <div className="hero absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="relative mx-auto mb-4 h-[116px] w-[84px] md:h-[166px] md:w-[120px]">
            <Image src="/logo-icononly-nobuffer.png" fill sizes="100%" alt="silverflame 로고" />
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl md:leading-tight">
            {/* 정확 열정 해결 */}
            {/* 단련하는 개발자 */}
            집요한 문제해결사
            <br />
            <span className="text-primary">LIM EUNSEOP</span>
          </h1>
          <p className="py-4 md:py-6">
            꾸준히 고민하고 성장하고 있는 프론트엔드 개발자입니다. 여러 공식 문서를 읽어가며 다져놓은 제 지식을 기반으로
            문제해결에 보탬이 되고 싶습니다. 점점 더 굳건해져 가고 있는 제 경험들을 둘러봐주세요.
          </p>
          <Link href="/careers/experiences" className="btn btn-primary">
            Explore
          </Link>
        </div>
      </div>
    </div>
  )
}
export default CareersIntro
