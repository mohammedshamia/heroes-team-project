import React, { useState, useRef, useEffect } from 'react'
import { StepProgress } from "./StepProgress"
import { StepperContainer, StepWrapper, StepperSelector } from './style'; 

interface StepperProp {
  steps: step[];
}
 export interface step {
  title: string,
  element: (stepProps: StepProps) => JSX.Element,
}
 export interface StepProps {
  goNextStep: () => void;
  goPreviousStep: () => void;
  currentStep: number;
  first:boolean; 
  last: boolean; 
  step?: number;
  
}
const Stepper: React.FC<StepperProp> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepperSelector = useRef<HTMLDivElement>(null);
  useEffect(() => {
    moveStepper();
  }, [currentStep]);
  const goNextStep = () => {
    const nextStep = currentStep + 1; 
    if (nextStep <= steps.length) {
      setCurrentStep(nextStep)
    }
   };
  const goPreviousStep = () => { 
    const perviousStep = currentStep - 1; 
    if (perviousStep >= 1) {
      setCurrentStep(perviousStep)
    }
  };
  const moveStepper = () => {
    if (stepperSelector.current) {
      const stepper = stepperSelector.current;
      const stepWidth = stepper.offsetWidth / steps.length;
      stepper.style.transform = `translateX(-${stepWidth * (currentStep - 1)
        }px)`;
    }
  };
  return (
    // wrapper 
    <StepperContainer> 
      <StepProgress
        stepTitles={steps.map(step => step.title)}
        currentStep={currentStep}
      />
      <StepperSelector ref={stepperSelector}>
     { steps.map((step,i)  => (
        < StepWrapper key = {i}>
         <step.element
           first={i===0}
           currentStep={currentStep}
           last={i === steps.length-1}
           goNextStep={goNextStep}
           goPreviousStep={goPreviousStep}
           step = {i +1}
         /> 
       </ StepWrapper>
        ))}

      </StepperSelector>
    </StepperContainer>
  )
}

export default Stepper
