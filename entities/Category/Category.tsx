import React from 'react';
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
import { ArrowDownSmallIcon } from '@helpers/icons/16';

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
  const [header, setHeader] = React.useState<boolean>(false);

  return (
    <Grid Component='nav' col={header ? '9' : '8'} gap={header ? 32 : 30}>
      {category.map((c) => (
        <Card
          onClick={() => setHeader(!header)}
          Component='a'
          direction='column'
          appearance='category'
          key={c.id}
          navHeader={header}
          tabIndex={0}
        >
          {header ? '' : c.icon}
          <Text>{c.name}</Text>
        </Card>
      ))}
      {header && (
        <Card Component='a' navHeader={header} tabIndex={0}>
          <Text icon={<ArrowDownSmallIcon />}>Другое</Text>
        </Card>
      )}
    </Grid>
  );
};
