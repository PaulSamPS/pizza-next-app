import { Button, Count, Paragraph, Text, Title, Tab } from '@components';
import { PizzaIcon } from 'helpers/icons/category';
import React from 'react';
import styles from '../styles/Home.module.scss';

const sizes = ['20', '28', '32'];
const type = ['Традиционное', 'Тонкое'];

export default function Home() {
  const [count, setCount] = React.useState<number>(0);

  const decrease = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const increase = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className={styles.container}>
      <Title level='1'>h1</Title>
      <Title level='2'>h2</Title>
      <Title level='3'>h3</Title>
      <Title level='4'>h4</Title>
      <Title level='1' caps>
        uppercase
      </Title>
      <Paragraph>Hello</Paragraph>
      <Text level='1' weight='1'>
        Hello
      </Text>
      <Text level='2' weight='2'>
        Hello
      </Text>
      <Text level='3' weight='3'>
        Hello
      </Text>
      <PizzaIcon />
      <Button appearance='primary'>Применить</Button>
      <Button appearance='loading'>Загружается</Button>
      <Button appearance='transparent'>Сбросить</Button>
      <Button appearance='icon' />
      <Button appearance='price'>от 500 р</Button>
      <Button appearance='filter'>Фильтры</Button>
      <Button appearance='secondary'>Новинка</Button>
      <Count count={count} decrease={decrease} increase={increase} />
      <Tab arr={sizes} col='3' />
      <Tab arr={type} col='2' />
    </div>
  );
}
