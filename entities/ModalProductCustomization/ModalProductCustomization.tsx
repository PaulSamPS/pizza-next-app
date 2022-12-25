import React from 'react';
import { Badge, Button, Icon, ModalOverlay, Tab } from '@components/Blocks';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@helpers/icons/32';
import { Text, Title } from '@components/Typography';
import { IProduct } from '@types';
import { additionAdapter } from '@packages/adapter/additionAdapter';
import styles from './ModalProductCustomization.module.scss';
import { PizzaImage } from './PizzaImage';
import { useScrollAdditions } from './useScrollAdditions';
import { ModalProductCustomizationTitle } from './ModalProductCustomizationTitle';
import { ModalProductCustomizationDescription } from './ModalProductCustomizationDescription';
import { ModalProductCustomizationAdditions } from './ModalProductCustomizationAdditions';
import { useModalProductCustomization } from './useModalProductCustomization';

type ModalProductCustomizationProps = {
  setModal: (modal: boolean) => void;
  modal: boolean;
  product: IProduct;
};

export const ModalProductCustomization = ({
  setModal,
  modal,
  product,
}: ModalProductCustomizationProps) => {
  const { containerRef, scrollContainerBy, canScrollLeft, canScrollRight } =
    useScrollAdditions();
  const {
    setPizzaSize,
    currentSize,
    currentWeight,
    setDough,
    pizzaSize,
    dough,
    sizeIndex,
  } = useModalProductCustomization({
    weight: product.weight,
    weightSlim: product.weightSlim,
  });
  const additions = additionAdapter();

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
          {product.badge && <Badge top='32px'>{product.badge}</Badge>}
          <PizzaImage
            pizzaSize={currentSize}
            dough={dough}
            image={product.image}
          />
          <div className={styles.customizations}>
            <ModalProductCustomizationTitle
              name={product.name}
              promotion={product.promotion}
            />
            <ModalProductCustomizationDescription
              pizzaSize={pizzaSize}
              dough={dough}
              desc={product.description}
              weight={currentWeight}
            />
            <div className={styles.addendum}>
              <Tab
                arr={product.dough}
                currentValue={dough}
                className={styles.dough}
                currentDough={setDough}
              />
              <Tab
                arr={product.size}
                currentValue={pizzaSize}
                className={styles.sizes}
                currentSize={setPizzaSize}
              />
              <Text level='l2' weight='w1' className={styles.subtitle}>
                Добавьте в пиццу
              </Text>
              <ModalProductCustomizationAdditions
                canScrollLeft={canScrollLeft}
                canScrollRight={canScrollRight}
                scrollContainerBy={scrollContainerBy}
                containerRef={containerRef}
                additions={additions}
              />
              <div className={styles.add}>
                <Title level='4'>{`Итого: ${product.price[sizeIndex]} ₽`}</Title>
                <Button appearance='primary' height={48} width={155}>
                  Добавить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ModalOverlay>
  );
};
