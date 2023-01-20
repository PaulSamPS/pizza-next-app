import React from 'react';
import { Block, Container, Divider } from '@components/Blocks';
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
import styles from '../styles/HeaderDesktop.module.scss';
import { Login } from '../components';
import { HeaderDesktopBottom } from './HeaderDesktopBottom';

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

export const HeaderDesktop = () => (
  <>
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
    </Block>
    <HeaderDesktopBottom category={category} />
  </>
);
