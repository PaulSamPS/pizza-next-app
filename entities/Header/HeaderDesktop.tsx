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
import Link from 'next/link';
import { useAppDispatch } from '@hooks';
import { useRouter } from 'next/router';
import styles from './styles/HeaderDesktop.module.scss';
import { Logo, Login } from './components';
import { setBasketModalIsOpened } from '@store/slices/basketModal.slice';

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

export const HeaderDesktop = () => {
  const [isSticky, setIsSticky] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleOpenModalCart = () => {
    if (router.pathname !== '/basket') {
      dispatch(setBasketModalIsOpened(true));
      setIsSticky(true);
    }
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
          <Login />
          <Auth />
        </div>
      </Container>
      <Divider />
      <Container>
        <div className={cx(styles.header, styles.bot)}>
          <Link href='/'>
            <Logo />
          </Link>
          {isSticky && <CategoryHeader category={category} />}
          <Button
            appearance='primary'
            before={<CartIcon />}
            height={40}
            onClick={handleOpenModalCart}
          >
            22550 ₽
          </Button>
        </div>
      </Container>
      <Divider />
    </Block>
  );
};
