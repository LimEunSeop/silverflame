'use client'

import { UIEventHandler, useState } from 'react'
import StepIndicator from './components/StepIndicator'
import * as stepComponentsObj from './step-components'

const stepComponentsArr = Object.values(stepComponentsObj)

const CareersIntro = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const handleCarouselScroll: UIEventHandler<HTMLDivElement> = (e) => {
    const { scrollTop, offsetHeight } = e.currentTarget

    // if (scrollTop >= offsetHeight * 0 && scrollTop < offsetHeight * 1) {
    //   setCurrentStep(0)
    // } else if (scrollTop >= offsetHeight * 1 && scrollTop < offsetHeight * 2) {
    //   setCurrentStep(1)
    // } else if (scrollTop >= offsetHeight * 2 && scrollTop < offsetHeight * 3) {
    //   setCurrentStep(2)
    // } else if (scrollTop >= offsetHeight * 3 && scrollTop < offsetHeight * 4) {
    //   setCurrentStep(3)
    // } else if (scrollTop >= offsetHeight * 4 && scrollTop < offsetHeight * 5) {
    //   setCurrentStep(4)
    // }

    for (let i = 0; i < stepComponentsArr.length; i++) {
      if (scrollTop >= offsetHeight * (i - 0.5) && scrollTop < offsetHeight * (i + 0.5)) {
        setCurrentStep(i)
        break
      }
    }
  }

  return (
    <>
      <StepIndicator currentStep={currentStep} maxStep={stepComponentsArr.length - 1} />

      <div className="carousel carousel-vertical h-full w-full" onScroll={handleCarouselScroll}>
        {stepComponentsArr.map((Step, i) => (
          <div key={i} className="carousel-item h-full">
            <Step key={i} />
          </div>
        ))}
      </div>
    </>
  )
}
export default CareersIntro
