import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { ModalAuth } from '@shared/ui';
import { EnterCode, EnterPhone } from './ui';
import { StepContext } from './context/stepContext';

type StepComponentType = {
  [key: number]: FunctionComponent;
};

export const Auth = () => {
  const [step, setStep] = React.useState<number>(0);
  const [phone, setPhone] = React.useState<string>('');
  const [userId, setUserId] = React.useState<string>('');
  const stepComponents: StepComponentType = {
    0: EnterPhone,
    1: EnterCode,
  };
  const Step = stepComponents[step];
  const router = useRouter();

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const contextValue = React.useMemo(
    () => ({
      step,
      setStep,
      nextStep,
      setPhone,
      phone,
      setUserId,
      userId,
    }),
    [userId]
  );

  return (
    <ModalAuth
      setModal={() => router.push(router.pathname)}
      modal={!!router.query.auth}
    >
      <StepContext.Provider value={contextValue}>
        <Step />
      </StepContext.Provider>
    </ModalAuth>
  );
};
