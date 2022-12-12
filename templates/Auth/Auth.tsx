import React, { FunctionComponent, useContext } from 'react';
import { EnterCode, EnterPhone, AuthDesktop, AuthMobile } from '@entities';
import { DeviceContext, StepContext } from '@context';

type StepComponentType = {
  [key: number]: FunctionComponent;
};

type AuthProps = {
  isOpened?: boolean;
  setIsOpened?: (isOpened: boolean) => void;
};

export const Auth = ({ isOpened, setIsOpened }: AuthProps) => {
  const [step, setStep] = React.useState<number>(0);
  const [phone, setPhone] = React.useState<string>('');
  const stepComponents: StepComponentType = {
    0: EnterPhone,
    1: EnterCode,
  };
  const Step = stepComponents[step];
  const { isDesktop } = useContext(DeviceContext);

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

  if (isDesktop) {
    return (
      <AuthDesktop modal={isOpened!} setModal={setIsOpened!}>
        <StepContext.Provider value={contextValue}>
          <Step />
        </StepContext.Provider>
      </AuthDesktop>
    );
  }

  return (
    <AuthMobile>
      <StepContext.Provider value={contextValue}>
        <Step />
      </StepContext.Provider>
    </AuthMobile>
  );
};
