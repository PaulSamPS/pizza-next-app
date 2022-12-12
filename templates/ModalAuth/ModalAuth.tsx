import React, { FunctionComponent } from 'react';
import { StepContext } from '@context';
import { EnterPhone, EnterCode } from '@entities';
import { Icon, ModalOverlay } from '@components/Blocks';
import { CloseIcon32 } from '@helpers/icons/32';
import { motion } from 'framer-motion';
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

  const closeModal = () => {
    if (setModal) {
      setModal(false);
    }
  };

  const variantsModal = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-100%' },
  };

  return (
    <ModalOverlay isOpened={modal}>
      <motion.div
        className={styles['modal-auth']}
        animate={modal ? 'open' : 'closed'}
        variants={variantsModal}
        initial='closed'
        exit='closed'
        transition={{
          damping: 20,
          type: 'spring',
          stiffness: 250,
        }}
      >
        <Icon className={styles['close-icon']} onClick={closeModal}>
          <CloseIcon32 />
        </Icon>
        <form className={styles.form}>
          <StepContext.Provider value={contextValue}>
            <Step />
          </StepContext.Provider>
        </form>
      </motion.div>
    </ModalOverlay>
  );
};
