import React from 'react';
import { Grid, Select, Text } from '@components';
import { LocationIcon, AccountIcon } from '@helpers/icons/20';
import styles from './Header.module.scss';

const city = ['Москва', 'Оренбург', 'Санкт-Петербург'];

export const Header = () => (
  <div className={styles.header}>
    <Grid col='col2'>
      <Grid colAuto='col3auto' columnGap={40}>
        <Select arr={city} editable before={<LocationIcon />} />
        <Text level='l2'>Проверить адрес</Text>
        <Text level='l2'>
          Среднее время доставки*:
          <b> 00:24:19</b>
        </Text>
      </Grid>
      <Grid colAuto='col2auto' columnGap={40} content='content-end'>
        <Text level='l2'>Время работы: с 11:00 до 23:00</Text>
        <Grid colAuto='col2auto' columnGap={8}>
          <span style={{ fontSize: 0 }}>
            <AccountIcon />
          </span>
          <Text level='l2'>Войти в аккаунт</Text>
        </Grid>
      </Grid>
    </Grid>
  </div>
);
