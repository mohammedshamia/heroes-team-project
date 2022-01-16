
import { StepperProgress, StepperProgressWrapper, StepperProgressBar} from './style'
interface StepperProgressProps {
  stepTitles: string[];
  currentStep: number;
}
export const StepProgress: React.FC<StepperProgressProps> = ({
  stepTitles,
  currentStep,
}) => {
  const progressPerStep = 100 / (stepTitles.length - 1);
  const progress = (currentStep - 1) * progressPerStep;
  return (
    <StepperProgress>
      <StepperProgressWrapper>
        <StepperProgressBar
          style={{ width: progress + "%" }}
        />
        {stepTitles.map((title, i) => (
          <div className="step-title" key = {i}>
            <div className="step-title-number">{i + 1}</div>
            {title}
          </div>
        ))}
      </StepperProgressWrapper>
    </StepperProgress>
  );
};