import React, { FunctionComponent } from 'react';
import { EnterCode, EnterPhone } from '@entities';
import { StepContext } from '@context';
import { ModalAuth } from '@components/Blocks/ModalAuth';
import { useRouter } from 'next/router';

type StepComponentType = {
  [key: number]: FunctionComponent;
};

export const Auth = () => {
  const [step, setStep] = React.useState<number>(0);
  const [phone, setPhone] = React.useState<string>('');
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
      nextStep,
      setPhone,
      phone,
    }),
    []
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
