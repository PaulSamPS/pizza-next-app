import React from 'react';
import { Block, Container, Divider } from '@components/Blocks';
import { Text, Title } from '@components/Typography';
import { LocationIcon, PhoneIcon } from '@helpers/icons/20';
import { Logo } from '../Header/components';
import styles from './Footer.module.scss';

export const Footer = () => (
  <Block>
    <Divider />
    <Container>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <Logo />
          <Text level='l2'>
            {`© Copyright ${new Date().getFullYear()} — Pizza`}
          </Text>
        </div>
        <div className={styles.list}>
          <Title level='4'>Pizza</Title>
          <ul>
            <li>О компании</li>
            <li>Пользовательское соглашение</li>
            <li>Условия гарантии</li>
          </ul>
        </div>
        <div className={styles.list}>
          <Title level='4'>Помощь</Title>
          <ul>
            <li>Ресторан</li>
            <li>Контакты</li>
            <li>Поддержка</li>
            <li>Отследить заказ</li>
          </ul>
        </div>
        <div className={styles.contacts}>
          <Title level='4'>Контакты</Title>
          <div className={styles.item}>
            <PhoneIcon />
            <Text level='l2'>+7 (926) 223-10-11</Text>
          </div>
          <div className={styles.item}>
            <LocationIcon />
            <Text level='l2'>Москва, ул. Юных Ленинцев, д.99</Text>
          </div>
        </div>
      </div>
    </Container>
  </Block>
);
