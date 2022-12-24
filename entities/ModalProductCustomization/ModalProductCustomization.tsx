import React from 'react';
import { Badge, Button, Icon, ModalOverlay, Tab } from '@components/Blocks';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@helpers/icons/32';
import { Text, Title } from '@components/Typography';
import { StaticImageData } from 'next/image';
import styles from './ModalProductCustomization.module.scss';
import { PizzaImage } from './PizzaImage';
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
import { ModalProductCustomizationTitle } from './ModalProductCustomizationTitle';
import { ModalProductCustomizationDescription } from './ModalProductCustomizationDescription';
import { ModalProductCustomizationAdditions } from './ModalProductCustomizationAdditions';
import { useSelectSize } from './useSelectSize';

type ProductType = {
  id: number;
  badge: string | null;
  name: string;
  description: string;
  price: number;
  image: { regular: StaticImageData; slim: StaticImageData };
  promotion: boolean;
};

type ModalProductCustomizationProps = {
  setModal: (modal: boolean) => void;
  modal: boolean;
  product: ProductType;
};

const tabs = ['Традиционное', 'Тонкое'];
const sizes = ['25 см', '30 см', '35 см'];
const additions = [
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
  product,
}: ModalProductCustomizationProps) => {
  const [pizzaSize, setPizzaSize] = React.useState<string>('25 см');
  const [dough, setDough] = React.useState<string>('Традиционное');
  const { containerRef, scrollContainerBy, canScrollLeft, canScrollRight } =
    useScrollAdditions();
  const { currentSize } = useSelectSize(pizzaSize);

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
            />
            <div className={styles.addendum}>
              <Tab
                arr={tabs}
                currentValue={dough}
                className={styles.dough}
                currentDough={setDough}
              />
              <Tab
                arr={sizes}
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
