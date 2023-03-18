import React from 'react';
import { Block, Container, Divider } from '@shared/ui/Blocks';
import cx from 'clsx';
import { Select } from '@shared/ui/Form';
import { LocationIcon } from '@shared/assets/icons/20';
import { Text } from '@shared/ui/Typography';
import { Auth } from '@processes/Auth';
import styles from '../styles/HeaderDesktop.module.scss';
import { Login } from '../components';

const city = ['Москва', 'Оренбург'];

export const HeaderDesktop = () => (
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
        <div className={styles.auth}>
          <Text level='l1'>Время работы: с 11:00 до 23:00</Text>
          <Login />
        </div>
        <Auth />
      </div>
    </Container>
    <Divider />
  </Block>
);
