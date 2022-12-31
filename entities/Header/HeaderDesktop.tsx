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
import { Auth, TemplateCartModal } from '@templates';
import { IProduct } from '@types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles/HeaderDesktop.module.scss';
import { Logo, Login } from './components';

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
  const router = useRouter();

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
          <Link href='/?auth=login'>
            <Login setModal={() => router.push('/')} />
          </Link>
          <Auth
            isOpened={!!router.query.auth}
            setIsOpened={() => router.push('/')}
          />
        </div>
      </Container>
      <Divider />
      <Container>
        <div className={cx(styles.header, styles.bot)}>
          <Logo />
          {isSticky && <CategoryHeader category={category} />}
          <Link href='/?basket=modal'>
            <Button
              appearance='primary'
              before={<CartIcon />}
              height={40}
              onClick={() => setIsSticky(true)}
            >
              22550 ₽
            </Button>
          </Link>
        </div>
      </Container>
      <Divider />
      <TemplateCartModal
        setModal={() => router.push('/')}
        modal={!!router.query.basket}
        product={product}
      />
    </Block>
  );
};
