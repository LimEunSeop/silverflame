import ScrollAnimationIcon from './components/ScrollAnimationIcon'

//! 인트로 컨텐츠 아이디어 정리

// 안녕하세요 정리를 생활화하는 프론트엔드 개발자 임은섭 입니다.

// 저는 관리하기 쉬운 코드를 만드는 것을 좋아합니다.
// 또한 무엇이든지 구현해내는 과정이 매우 재밌습니다!
// =>동료 개발자의 편안함?? 같은 것을 어디에 언급하는것이 좋을까? => 다음 섹션에 구현

// 지금 보시는 포트폴리오 또한, 보시기 편하게 모든것을 한 군데에 모았습니다.
// 동료 개발자분께 도움이 되도록 많이 노력하겠습니다. 천천히 둘러봐주시기 바랍니다!
// => 각 섹션별로 설명 진행하는 UI 제작
// Q) 프론트엔드 개발자가 된 이유? 화면을 다루는 로직 모든것이 재밌습니다.

// 피드백 => 서사가 빠졌다.커다란 궁금증, 흥미를 불러들이기에는 다소 부족한 감이 없지않아 있다.

export const Step1 = () => {
  return (
    <div className="relative grid h-full w-full place-items-center ">
      <p className="text-center text-sm leading-relaxed sm:text-2xl sm:leading-relaxed md:text-4xl md:leading-relaxed">
        안녕하세요, 정리를 생활화하는 프론트엔드 개발자
        <br />
        임은섭입니다.
        <br />
        <span className="text-xs">디자인은 아직 구상중입니다. 죄송합니다 😭</span>
      </p>

      <div className="absolute bottom-12 md:bottom-5">
        <ScrollAnimationIcon />
      </div>
    </div>
  )
}

export const Step2 = () => {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <p className="text-center text-sm leading-relaxed sm:text-2xl sm:leading-relaxed md:text-4xl md:leading-relaxed">
        저는 관리하기 쉬운 코드를 만들어 나가면서
        <br />
        개발속도를 향상시키는 것을 좋아합니다.
        <br />
        또한 무엇이든지 구현해내는 과정이 매우 재밌습니다!
      </p>
    </div>
  )
}

export const Step3 = () => {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <p className="text-center text-sm leading-relaxed sm:text-2xl sm:leading-relaxed md:text-4xl md:leading-relaxed">
        이 사이트 또한, 보시기 편하도록 모든것을
        <br />한 군데에 모았습니다.
        <br />
        동료 개발자분께 도움이 되도록 많이 노력하겠습니다.
        <br />
        천천히 둘러봐주시기 바랍니다!
      </p>
    </div>
  )
}
