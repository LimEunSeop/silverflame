import GithubLink from '@/components/links/GithubLink'

const CareersContact = () => {
  return (
    <div className="hero flex-1">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="break-keep text-5xl font-bold">방문해주셔서 감사합니다</h1>
          <p className="py-6">
            꾸준히 정진하는 개발자가 되겠습니다.
            <br />
            무엇이든 연락해주시면 성심성의껏 답변드리겠습니다.
            <br />
            <GithubLink href="https://github.com/limeunseop" />
          </p>
          <a href="mailto:dmstjq92@gmail.com" className="btn btn-primary">
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
export default CareersContact
