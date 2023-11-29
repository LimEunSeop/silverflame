import { useLottie } from 'lottie-react'
import scrollAnimation from './scroll-animation.lottie.json'

const ScrollAnimationIcon = () => {
  const { View } = useLottie({
    animationData: scrollAnimation,
    loop: true,
  })
  return <div className="h-10 w-10 md:h-16 md:w-16 [&_path]:fill-base-content">{View}</div>
}
export default ScrollAnimationIcon
