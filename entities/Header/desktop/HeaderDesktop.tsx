import React from 'react';
import { Block, Container, Divider } from '@components/Blocks';
import cx from 'clsx';
import { Select } from '@components/Form';
import { LocationIcon } from '@helpers/icons/20';
import { Text } from '@components/Typography';
import { Auth } from '@templates';
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
        <Login />
        <Auth />
      </div>
    </Container>
    <Divider />
  </Block>
);
