import { useState } from "react";
import { Button } from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export const Stepper = () => {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if(step > 1) setStep((s) => s - 1)
  }

  const handleNext = () => {
    if(step < 3) setStep((s) => s + 1)
  }

  const StepMessage = ({ step, children }) => {
    return (
      <div className="message">
        <h3>Step {step}</h3>
        {children}
      </div>
    )
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <StepMessage step={step}>{messages[step - 1]}</StepMessage>

      <div className="buttons">
        <Button
          textColor="#fff"
          bgColor="#7950f2"
          onClick={handlePrevious}
        ><span>👈🏻</span> Previous</Button>
        <Button
          textColor="#fff"
          bgColor="#7950f2"
          onClick={handleNext}
        >Next <span>👉🏻</span></Button>
      </div>
    </div>
  );
};
