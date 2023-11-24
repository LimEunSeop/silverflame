import ScrollAnimationIcon from './components/ScrollAnimationIcon'

export const Step1 = () => {
  return (
    <div className="relative grid h-full w-full place-items-center ">
      <p className="flex flex-col gap-6 text-center">
        <span className="bold text-5xl">와 주셔서 감사합니다!</span>
        <span className="text-4xl">노력하는 프론트엔드 개발자</span>
        <span className="text-4xl">
          <span className="text-primary">임은섭</span>입니다.
        </span>
      </p>

      <div className="absolute bottom-5">
        <ScrollAnimationIcon />
      </div>
    </div>
  )
}

export const Step2 = () => {
  return <div>무엇이든 해결하고자 하는 집요한 일념 하나로 반드시 구현한다.</div>
}

export const Step3 = () => {
  return <div>1. 코드에서의 미니멀리즘 지향</div>
}

export const Step4 = () => {
  return <div>2. 조직의 규칙을 충실히 따른다</div>
}

export const Step5 = () => {
  return (
    <div>
      점점 더 굳건해져 가고 있는 제 경험들을 둘러봐주세요.
      <br />
      <br />
      경험들 뭐 봐야하는지 소개. 쉽게 이 부분만 보면 된다는 점을 어필
    </div>
  )
}
