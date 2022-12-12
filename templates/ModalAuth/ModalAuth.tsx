import React, { FunctionComponent } from 'react';
import { StepContext } from '@context';
import { EnterPhone, EnterCode } from '@entities';
import { Modal } from '@components/Blocks';
import styles from './ModalAuth.module.scss';

type ModalAuthProps = {
  setModal?: (modal: boolean) => void;
  modal: boolean;
};

type StepComponentType = {
  [key: number]: FunctionComponent;
};

export const ModalAuth = ({ setModal, modal }: ModalAuthProps) => {
  const [step, setStep] = React.useState<number>(0);
  const [phone, setPhone] = React.useState<string>('');
  const stepComponents: StepComponentType = {
    0: EnterPhone,
    1: EnterCode,
  };
  const Step = stepComponents[step];

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
    <Modal setModal={setModal} open={modal}>
      <div className={styles['modal-auth']}>
        <form className={styles.form}>
          <StepContext.Provider value={contextValue}>
            <Step />
          </StepContext.Provider>
        </form>
      </div>
    </Modal>
  );
};
