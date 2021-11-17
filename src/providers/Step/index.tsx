import { createContext, useContext, useState } from "react";
import { NodeProps } from "../../globalTypes";
import { StepProviderProps } from "./types";

const StepContext = createContext<StepProviderProps>({} as StepProviderProps);

export const StepProvider = ({ children }: NodeProps): JSX.Element => {
  const [step, setStep] = useState<number>(0);

  const handleStepIncrementation = (): void => {
    setStep(step + 1);
  };

  return (
    <StepContext.Provider value={{ step, handleStepIncrementation }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = (): StepProviderProps => useContext(StepContext);
