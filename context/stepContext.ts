import React from 'react';

export interface IStepContext {
  step: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  setPhone: (phone: string) => void;
  phone: string;
  setUserId: (userId: string) => void;
  userId: string;
}

export const StepContext = React.createContext<IStepContext>(
  {} as IStepContext
);
