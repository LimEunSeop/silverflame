import { useLottie } from 'lottie-react'
import scrollAnimation from './lottie-scroll-animation.json'

const ScrollAnimationIcon = () => {
  const { View } = useLottie({
    animationData: scrollAnimation,
    loop: true,
  })
  return <div className="h-16 w-16 [&_path]:fill-base-content">{View}</div>
}
export default ScrollAnimationIcon
