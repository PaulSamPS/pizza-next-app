import { Button, Paragraph, Text, Title } from '@components';
import { PizzaIcon } from 'helpers/icons/category';
import styles from '../styles/Home.module.scss';

export default function Home() {
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
    </div>
  );
}
