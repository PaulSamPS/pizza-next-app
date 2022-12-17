import React from 'react';
import { Badge, Button, Icon, ModalOverlay, Tab } from '@components/Blocks';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@helpers/icons/32';
import Image from 'next/image';
import { PromotionsIcon } from '@helpers/icons/category';
import { Text, Title } from '@components/Typography';
import { InfoIcon } from '@helpers/icons/24';
import { CheeseIcon, RemoveIcon } from '@helpers/icons/addendum';
import cx from 'clsx';
import styles from './ModalProductCustomization.module.scss';
import product from './product.jpg';

type ModalProductCustomizationProps = {
  setModal: (modal: boolean) => void;
  modal: boolean;
};

const tabs = ['Традиционное', 'Тонкое'];
const sizes = ['20 см', '28 см', '33 см'];

export const ModalProductCustomization = ({
  setModal,
  modal,
}: ModalProductCustomizationProps) => {
  const [addendumItem, setAddendumItem] = React.useState<boolean>(false);

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
    <ModalOverlay position='center' isOpened={modal}>
      <motion.div
        className={styles['modal-product-customizations']}
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
        <div className={styles.card}>
          <div className={styles.image}>
            <Image src={product} alt='product' width={450} height={450} />
            <Badge top='32px'>New</Badge>
          </div>
          <div className={styles.customizations}>
            <div className={styles.title}>
              <div className={styles.name}>
                <Icon>
                  <PromotionsIcon />
                </Icon>
                <Title level='4' weight='w1'>
                  Пеперони по деревенски
                </Title>
              </div>
              <Icon className={styles.info}>
                <InfoIcon />
              </Icon>
            </div>
            <div className={styles.addendum}>
              <div
                className={cx(
                  styles['addendum-card'],
                  addendumItem && styles.added
                )}
              >
                <Button
                  appearance='outline-gray'
                  className={styles['addendum-item']}
                  onClick={() => setAddendumItem(!addendumItem)}
                >
                  <CheeseIcon />
                  {addendumItem && (
                    <Icon className={styles.remove}>
                      <RemoveIcon />
                    </Icon>
                  )}
                </Button>
                <Text level='l1'>Моцарелла</Text>
              </div>
              <Tab arr={tabs} className={styles.dough} />
              <Tab arr={sizes} className={styles.sizes} />
              <Text level='l2' weight='w1' className={styles.subtitle}>
                Добавьте в пиццу
              </Text>
            </div>
          </div>
        </div>
      </motion.div>
    </ModalOverlay>
  );
};
