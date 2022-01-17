import React from "react";
import Stepper from "../../Components/Stepper";
// import Stepper from
import { StepProps } from "../../Components/Stepper";
import { Wrapper, StepContainer, StepBody, StepAction } from "./style";
import Button from "../../Components/Elements/Buttons";
const Step: React.FC<StepProps> = ({
  goNextStep,
  goPreviousStep,
  first,
  last,
  step,
}) => {
  return (
    <StepContainer>
      <StepBody>IM THE STEP {step}</StepBody>
      <StepAction>
        {/* If we are in the Step 1, we cannot go back, so we disable this */}
        <Button
          backgroundColor="#FCDD06"
          disabled={first}
          onClick={goPreviousStep}
          padding="10px 20px"
        >
          GO PREVIOUS
        </Button>
        {/* Same but with the last step */}
        <Button
          backgroundColor="#FCDD06"
          disabled={last}
          onClick={goNextStep}
          padding="10px 20px"
        >
          GO NEXT
        </Button>
      </StepAction>
    </StepContainer>
  );
};
const dataSteps = [
  {
    title: "Shipping and payment",
    element: (StepProps: StepProps) => <Step {...StepProps} />,
  },
  {
    title: "place an order",
    element: (StepProps: StepProps) => <Step {...StepProps} />,
  },
];
const ReviewPage = () => {
  return (
    <Wrapper>
      <Stepper steps={dataSteps} />
    </Wrapper>
  );
};

export default ReviewPage;
