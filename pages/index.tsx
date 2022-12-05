import {
  Button,
  Count,
  Paragraph,
  Text,
  Title,
  Tab,
  Radio,
  Input,
} from '@components';
import { PizzaIcon } from 'helpers/icons/category';
import React from 'react';
import { ArrowBackIcon } from '@helpers/icons/18';
import { Category } from '@entities';
import { LogoIcon } from '@helpers/icons/32';
import styles from '../styles/Home.module.scss';
import { Header } from '../components/Header/Header';

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
      <Button appearance='icon' icon={<ArrowBackIcon />} />
      <Button appearance='price'>от 500 р</Button>
      <Button appearance='filter'>Фильтры</Button>
      <Button appearance='secondary'>Новинка</Button>
      <Button appearance='cart'>1100 ₽</Button>
      <Count count={count} decrease={decrease} increase={increase} />
      <Radio id='fast'>Как можно скорее</Radio>
      <Radio id='onTime'>По времени</Radio>
      <Tab arr={sizes} col='3' />
      <Tab arr={type} col='2' />
      <Input appearance='text' placeholder='Адрес' error='заполните поле'>
        Адрес*
      </Input>
      <Input appearance='money' placeholder='0' />
      <Input appearance='date' placeholder='Дата' />
      <Input appearance='time' placeholder='Время' />
      <Input appearance='empty' placeholder='Время' />
      <Input appearance='btn' placeholder='Промокод' />
      <Input appearance='icon-button' placeholder='Адрес' />
      <Input appearance='code' placeholder='x' maxLength={1} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <LogoIcon />
          <Title level='5' caps>
            Куда пицца
          </Title>
        </div>
        <Category />
        <Button appearance='cart'>0 ₽</Button>
      </div>
      <Header />
    </div>
  );
}
