import React from 'react';
import { Badge, Button, Icon, ModalOverlay, Tab } from '@components/Blocks';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@helpers/icons/32';
import Image from 'next/image';
import { PromotionsIcon } from '@helpers/icons/category';
import { Paragraph, Text, Title } from '@components/Typography';
import { InfoIcon } from '@helpers/icons/24';
import { ArrowDownSmallIcon } from '@helpers/icons/16';
import { LargeSizeIcon, MiddleSizeIcon } from '@helpers/icons/sizes';
import { selectSize } from '@helpers/selectSize';
import cx from 'clsx';
import styles from './ModalProductCustomization.module.scss';
import product from './product.webp';
import productSlim from './product-slim.webp';
import { AddToPizza } from './AddToPizza';
import mozzarella from './mozarella.png';
import cheese from './cheese.png';
import cholapenos from './cholapenos.png';
import pepperoni from './peperoni.png';
import ham from './ham.png';
import mushrooms from './mushrooms.png';
import tomato from './tomato.png';
import pickles from './pickles.png';
import crispyBacon from './crispy-bacon.png';
import { useScrollAdditions } from './useScrollAdditions';

type ModalProductCustomizationProps = {
  setModal: (modal: boolean) => void;
  modal: boolean;
};

const tabs = ['Традиционное', 'Тонкое'];
const sizes = ['25 см', '30 см', '35 см'];
const addendum = [
  {
    id: 0,
    name: 'Пармезан и чеддер',
    img: cheese,
    price: '99 ₽',
  },
  {
    id: 1,
    name: 'Сливочная моцарелла',
    img: mozzarella,
    price: '99 ₽',
  },
  {
    id: 2,
    name: 'Острый холапеньо',
    img: cholapenos,
    price: '70 ₽',
  },
  {
    id: 3,
    name: 'Пикантная пепперони',
    img: pepperoni,
    price: '79 ₽',
  },
  {
    id: 4,
    name: 'Ветчина',
    img: ham,
    price: '79 ₽',
  },
  {
    id: 5,
    name: 'Шампиньоны',
    img: mushrooms,
    price: '59 ₽',
  },
  {
    id: 6,
    name: 'Маринованные огурчики',
    img: pickles,
    price: '59 ₽',
  },
  {
    id: 7,
    name: 'Хрустящий бекон',
    img: crispyBacon,
    price: '79 ₽',
  },
  {
    id: 8,
    name: 'Свежие томаты',
    img: tomato,
    price: '59 ₽',
  },
];

export const ModalProductCustomization = ({
  setModal,
  modal,
}: ModalProductCustomizationProps) => {
  const [pizzaSize, setPizzaSize] = React.useState<string>('25 см');
  const [dough, setDough] = React.useState<string>('Традиционное');
  const { containerRef, scrollContainerBy, canScrollLeft, canScrollRight } =
    useScrollAdditions();

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
          <Badge top='32px'>New</Badge>
          <div className={styles['image-block']}>
            <div
              className={cx(
                styles.image,
                styles[`${selectSize(pizzaSize)}-size`]
              )}
            >
              <Image
                src={dough === 'Традиционное' ? product : productSlim}
                alt='product'
              />
            </div>
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
            <div className={styles.description}>
              <Text level='l2' className={styles.info}>
                {`${pizzaSize}, ${dough.toLowerCase()} тесто, 330 г`}
              </Text>
              <Paragraph>
                Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо
              </Paragraph>
            </div>
            <div className={styles.addendum}>
              <Tab arr={tabs} className={styles.dough} setDough={setDough} />
              <Tab
                arr={sizes}
                className={styles.sizes}
                setSize={setPizzaSize}
              />
              <Text level='l2' weight='w1' className={styles.subtitle}>
                Добавьте в пиццу
              </Text>
              <div className={styles.additions}>
                <Button
                  width={30}
                  height={30}
                  appearance='primary'
                  className={cx(
                    styles['arrow-left'],
                    !canScrollLeft && styles.none
                  )}
                  disabled={!canScrollLeft}
                  onClick={() => scrollContainerBy(-115)}
                >
                  <ArrowDownSmallIcon />
                </Button>
                <Button
                  width={30}
                  height={30}
                  appearance='primary'
                  className={cx(
                    styles['arrow-right'],
                    !canScrollRight && styles.none
                  )}
                  disabled={!canScrollRight}
                  onClick={() => scrollContainerBy(115)}
                >
                  <ArrowDownSmallIcon />
                </Button>
                <div className={styles.items} ref={containerRef}>
                  {addendum.map((item) => (
                    <AddToPizza
                      key={item.id}
                      image={item.img}
                      name={item.name}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.add}>
                <Title level='4'>Итого: 379 ₽</Title>
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
