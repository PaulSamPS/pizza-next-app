import React, { useContext } from 'react';
import {
  ComboIcon,
  DessertsIcon,
  DrinksIcon,
  PizzaIcon,
  PromotionsIcon,
  SaucesIcon,
  SnacksIcon,
  SushiIcon,
} from '@shared/assets/icons/category';
import { DeviceContext } from '@shared/context';
import { useScrollY } from '@shared/hooks';
import cx from 'clsx';
import { Text, Card } from '@shared/ui';
import desktop from './styles/desktop.module.scss';
import mobile from './styles/mobile.module.scss';

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
  const scrollY = useScrollY();

  return (
    <nav
      className={cx(
        isDesktop ? desktop.category : mobile.category,
        scrollY >= 120 && desktop.none
      )}
    >
      {category.map((c) => (
        <Card
          Component='a'
          appearance='outline'
          key={c.id}
          tabIndex={0}
          className={isDesktop ? desktop.card : mobile.card}
        >
          {c.icon}
          <Text level='l1' className={mobile.name}>
            {c.name}
          </Text>
        </Card>
      ))}
    </nav>
  );
};
