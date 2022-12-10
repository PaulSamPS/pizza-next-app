import React, {useContext} from 'react';
import { Card } from '@components/Blocks';
import { Text } from '@components/Typography';
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
import desktop from './styles/desktop.module.scss';
import mobile from './styles/mobile.module.scss';
import {DeviceContext} from "@context";

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
  const {isDesktop} = useContext(DeviceContext)

  return (
      <div className={isDesktop ? desktop.category : mobile.category}>
        {category.map((c) => (
            <Card
                Component='a'
                appearance='outline'
                key={c.id}
                tabIndex={0}
                className={isDesktop ? desktop.card : mobile.card}
            >
              {c.icon}
              <Text level='l1' className={mobile.name}>{c.name}</Text>
            </Card>
        ))}
      </div>
  )
};
