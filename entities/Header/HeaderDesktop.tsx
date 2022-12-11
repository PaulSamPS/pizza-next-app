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
import styles from './styles/HeaderDesktop.module.scss';
import { Logo, Auth } from './components';
import { ModalAuth } from '../ModalAuth';

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
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <Block>
      <Container>
        <div className={cx(styles.header, styles.top)}>
          <div className={styles.location}>
            <Select
              appearance='basic'
              level='l3'
              arr={city}
              editable
              before={<LocationIcon />}
            />
            <Text level='l3'>Проверить адрес</Text>
            <Text level='l3'>
              Среднее время доставки*:
              <b> 00:24:19</b>
            </Text>
          </div>
          <Auth setModal={setModal} />
          {modal && <ModalAuth setModal={setModal} />}
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
            onClick={() => setIsSticky(!isSticky)}
          >
            22550 р
          </Button>
        </div>
      </Container>
      <Divider />
    </Block>
  );
};
