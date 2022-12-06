import React, { useContext } from 'react';
import { Card, Grid, Text } from '@components';
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
import { DeviceContext } from '@context';
import styles from './Category.module.scss';

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

export const Category = () => {
  const { isDesktop } = useContext(DeviceContext);

  return (
    <div className={styles.category}>
      <Grid
        Component='nav'
        col='col8'
        columnGap={isDesktop ? 30 : 12}
        isDesktop={isDesktop}
      >
        {category.map((c) => (
          <Card Component='a' appearance='category' key={c.id} tabIndex={0}>
            {c.icon}
            <Text level='l1'>{c.name}</Text>
          </Card>
        ))}
      </Grid>
    </div>
  );
};
