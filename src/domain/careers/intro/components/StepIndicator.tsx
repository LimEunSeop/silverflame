/**
 * 0 부터 시작되는 스텝입니다.
 */

type Props = {
  currentStep: number
  maxStep: number
}

const StepIndicator = ({ currentStep, maxStep }: Props) => {
  return (
    <ul className="steps steps-horizontal fixed bottom-3 left-1/2 -translate-x-1/2 md:steps-vertical md:bottom-0 md:left-3 md:top-1/2 md:-translate-y-1/2 md:translate-x-0">
      {Array.from({ length: maxStep + 1 }, (_, i) => {
        let className = 'step'

        if (i <= currentStep) className += ' step-primary'

        return <li key={i} className={className}></li>
      })}
    </ul>
  )
}
export default StepIndicator
