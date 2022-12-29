import React from 'react';
import { Block, Button, Container, Divider } from '@components/Blocks';
import { CategoryHeader } from '@entities';
import { CartIcon } from '@helpers/icons/24';
import cx from 'clsx';
import {
  ComboIcon,
  DessertsIcon,
  DrinksIcon,
  PizzaIcon,
  PromotionsIcon,
  SaucesIcon,
  SnacksIcon,
  SushiIcon,
} from '@helpers/icons/category';
import { Select } from '@components/Form';
import { LocationIcon } from '@helpers/icons/20';
import { Text } from '@components/Typography';
import { Auth } from '@templates';
import { IProduct } from '@types';
import styles from './styles/HeaderDesktop.module.scss';
import { Logo, Login } from './components';
import { TemplateCartModal } from '../../templates/TemplateCartModal/TemplateCartModal';

const city = ['Москва', 'Оренбург'];

const category = [
  {
    id: 0,
    name: 'Акции',
    icon: <PromotionsIcon />,
  },
  {
    id: 1,
    name: 'Пицца',
    icon: <PizzaIcon />,
  },
  {
    id: 2,
    name: 'Суши',
    icon: <SushiIcon />,
  },
  {
    id: 3,
    name: 'Напитки',
    icon: <DrinksIcon />,
  },
  {
    id: 4,
    name: 'Закуски',
    icon: <SnacksIcon />,
  },
  {
    id: 5,
    name: 'Комбо',
    icon: <ComboIcon />,
  },
  {
    id: 6,
    name: 'Десерты',
    icon: <DessertsIcon />,
  },
  {
    id: 7,
    name: 'Соусы',
    icon: <SaucesIcon />,
  },
];

type HeaderDesktopProps = {
  product: IProduct[];
};

export const HeaderDesktop = ({ product }: HeaderDesktopProps) => {
  const [isSticky, setIsSticky] = React.useState<boolean>(false);
  const [modal, setModal] = React.useState<boolean>(false);
  const [modalCart, setModalCart] = React.useState<boolean>(false);

  const handleClick = () => {
    setIsSticky(!isSticky);
    setModalCart(!modalCart);
  };

  return (
    <Block>
      <Container>
        <div className={cx(styles.header, styles.top)}>
          <div className={styles.location}>
            <Select
              appearance='basic'
              level='l1'
              arr={city}
              editable
              before={<LocationIcon />}
            />
            <Text level='l1'>Проверить адрес</Text>
            <Text level='l1'>
              Среднее время доставки*:
              <b> 00:24:19</b>
            </Text>
          </div>
          <Login setModal={setModal} />
          <Auth isOpened={modal} setIsOpened={setModal} />
        </div>
      </Container>
      <Divider />
      <Container>
        <div className={cx(styles.header, styles.bot)}>
          <Logo />
          {isSticky && <CategoryHeader category={category} />}
          <Button
            appearance='primary'
            before={<CartIcon />}
            height={40}
            onClick={handleClick}
          >
            22550 ₽
          </Button>
        </div>
      </Container>
      <Divider />
      <TemplateCartModal
        product={product}
        setModal={setModalCart}
        modal={modalCart}
      />
    </Block>
  );
};
