import React from 'react';
import { Badge, Icon, ModalOverlay, Tab } from '@components/Blocks';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@helpers/icons/32';
import Image from 'next/image';
import { PromotionsIcon } from '@helpers/icons/category';
import { Text, Title } from '@components/Typography';
import { InfoIcon } from '@helpers/icons/24';
import { LargeSizeIcon, MiddleSizeIcon } from '@helpers/icons/sizes';
import { selectSize } from '@helpers/selectSize';
import cx from 'clsx';
import styles from './ModalProductCustomization.module.scss';
import product from './product.webp';
import { AddToPizza } from './AddToPizza';

type ModalProductCustomizationProps = {
  setModal: (modal: boolean) => void;
  modal: boolean;
};

const tabs = ['Традиционное', 'Тонкое'];
const sizes = ['25 см', '30 см', '35 см'];

export const ModalProductCustomization = ({
  setModal,
  modal,
}: ModalProductCustomizationProps) => {
  const [addendumItem, setAddendumItem] = React.useState<boolean>(false);
  const [pizzaSize, setPizzaSize] = React.useState<string>('25 см');
  console.log(selectSize(pizzaSize));

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
          <div className={styles['image-block']}>
            <div
              className={cx(
                styles.image,
                styles[`${selectSize(pizzaSize)}-size`]
              )}
            >
              <Image src={product} alt='product' />
            </div>
            <Badge top='32px'>New</Badge>
            <i className={styles.middle}>
              <MiddleSizeIcon />
            </i>
            <i className={styles.large}>
              <LargeSizeIcon />
            </i>
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
              <AddToPizza
                addendumItem={addendumItem}
                setAddendumItem={setAddendumItem}
              />
              <Tab arr={tabs} className={styles.dough} />
              <Tab
                arr={sizes}
                className={styles.sizes}
                setSize={setPizzaSize}
              />
              <Text level='l2' weight='w1' className={styles.subtitle}>
                Добавьте в пиццу
              </Text>
              <AddToPizza
                addendumItem={addendumItem}
                setAddendumItem={setAddendumItem}
                price
              />
            </div>
          </div>
        </div>
      </motion.div>
    </ModalOverlay>
  );
};
