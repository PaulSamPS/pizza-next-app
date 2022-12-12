import React from 'react';

export interface IStepContext {
  step: number;
  nextStep: () => void;
  setPhone: (phone: string) => void;
  phone: string;
}

export const StepContext = React.createContext<IStepContext>(
  {} as IStepContext
);
