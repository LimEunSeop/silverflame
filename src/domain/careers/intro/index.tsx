import Image from 'next/image'
import Link from 'next/link'

const CareersIntro = () => {
  return (
    <div className="hero flex-1">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Image
            src="/logo-icononly-nobuffer.png"
            width="120"
            height="166"
            alt="silverflame frontend"
            className="mx-auto mb-4"
          />
          <h1 className="text-5xl font-bold leading-tight">
            정확 열정 해결
            <br />
            <span className="text-primary">LIM EUNSEOP</span>
          </h1>
          <p className="py-6">
            꾸준히 고민하고 성장하고 있는 프론트엔드 개발자입니다. 여러 공식 문서를 읽어가며 다져놓은 제 지식을 기반으로
            조직의 문제해결에 보탬이 되고 싶습니다. 점점 더 굳건해져 가고 있는 제 경험들을 둘러봐주세요.
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
