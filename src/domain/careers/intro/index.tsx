'use client'

import { UIEventHandler, useState } from 'react'
import StepIndicator from './StepIndicator'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'

const Pages = [Step1, Step2, Step3, Step4, Step5]

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

    for (let i = 0; i < Pages.length; i++) {
      if (scrollTop >= offsetHeight * i && scrollTop < offsetHeight * (i + 1)) {
        setCurrentStep(i)
        break
      }
    }
  }

  return (
    <>
      <StepIndicator currentStep={currentStep} maxStep={Pages.length - 1} />

      <div className="carousel carousel-vertical h-full w-full" onScroll={handleCarouselScroll}>
        {Pages.map((Page, i) => (
          <div key={i} className="carousel-item h-full">
            <Page key={i} />
          </div>
        ))}
      </div>
    </>
  )
}
export default CareersIntro
