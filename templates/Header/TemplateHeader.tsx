import React, { useContext } from 'react';
import {
  Block,
  Button,
  Card,
  Container,
  Divider,
  Grid,
} from '@components/Blocks';
import { Select } from '@components/Form';
import { Text } from '@components/Typography';
import { Header } from '@entities';
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
import { DeviceContext } from '@context';
import styles from './TemplateHeader.module.scss';

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

const another = [
  'Акции',
  'Пользовательское соглашение',
  'О компании',
  'Условия гарантии',
  'Ресторан',
];

export const TemplateHeader = () => {
  const { isDesktop } = useContext(DeviceContext);
  const [isSticky, setIsSticky] = React.useState<boolean>(false);

  return (
    <Block>
      <Container>
        <div className={cx(styles.header, styles.top)}>
          <Header.Location arr={city} />
          {isDesktop && <Header.Auth />}
        </div>
      </Container>
      <Divider />
      <Container>
        <div className={cx(styles.header, styles.bot)}>
          <Header.Logo />
          {isSticky && (
            <Grid
              Component='nav'
              colAuto='col9auto'
              columnGap={32}
              isDesktop={isDesktop}
              className={styles.nav}
            >
              {category.map((c) => (
                <Card Component='a' key={c.id} tabIndex={0}>
                  <Text level='l2'>{c.name}</Text>
                </Card>
              ))}
              <Select
                arr={another}
                position='center'
                placeholder='Другое'
                appearance='basic'
              />
            </Grid>
          )}
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
