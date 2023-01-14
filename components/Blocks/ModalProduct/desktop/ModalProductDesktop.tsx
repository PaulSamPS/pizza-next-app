import React from 'react';
import { Icon, ModalOverlay } from '@components/Blocks';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@helpers/icons/32';
import { useScroll } from '@hooks';
import styles from './ModalProductDesktop.module.scss';

interface ModalProductProps extends React.AllHTMLAttributes<HTMLDivElement> {
  setModal: () => void;
  modal: boolean;
}

export const ModalProductDesktop = ({
  setModal,
  modal,
  children,
}: ModalProductProps) => {
  const [scrollModalOpen, setScrollModalOpen] = React.useState<number>(0);
  const { scrollY } = useScroll();

  const variantsModal = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  React.useEffect(() => {
    if (modal) {
      document.body.style.position = 'fixed';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.top = `-${scrollY}px`;
      setScrollModalOpen(scrollY);
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo(0, scrollModalOpen);
    }
  }, [modal]);

  return (
    <ModalOverlay position='center' isOpened={modal} setModal={setModal}>
      <motion.div
        className={styles['modal-product']}
        animate={modal ? 'open' : 'closed'}
        variants={variantsModal}
        initial='closed'
        exit='closed'
        transition={{
          duration: 0.4,
        }}
      >
        <Icon className={styles['close-icon']} onClick={setModal}>
          <CloseIcon32 />
        </Icon>
        {children}
      </motion.div>
    </ModalOverlay>
  );
};
