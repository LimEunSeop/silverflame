/**
 * 0 부터 시작되는 스텝입니다.
 */

type Props = {
  currentStep: number
  maxStep: number
}

const StepIndicator = ({ currentStep, maxStep }: Props) => {
  return (
    <ul className="steps steps-vertical fixed left-3 top-1/2 -translate-y-1/2">
      {Array.from({ length: maxStep + 1 }, (_, i) => {
        let className = 'step'

        if (i <= currentStep) className += ' step-primary'

        return <li key={i} className={className}></li>
      })}
    </ul>
  )
}
export default StepIndicator
