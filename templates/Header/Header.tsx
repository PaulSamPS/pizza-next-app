import React from 'react';
import { Location } from '@entities/Header';
import { Divider, Grid, Text, WhiteBlock } from '@components';
import styles from './Header.module.scss';

export const Header = () => (
  <>
    <WhiteBlock>
      <div className={styles.header}>
        <Grid col='3'>
          <Location />
          <Text level='3'>проверить адрес</Text>
        </Grid>
      </div>
    </WhiteBlock>
    <Divider />
  </>
);
