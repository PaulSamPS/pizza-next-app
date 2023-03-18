import React from 'react';
import { Block, Container, Divider } from '@shared/ui/Blocks';
import cx from 'clsx';
import { Select } from '@shared/ui/Form';
import { LocationIcon } from '@shared/assets/icons/20';
import { Text } from '@shared/ui/Typography';
import styles from '../styles/HeaderMobile.module.scss';

const city = ['Москва', 'Оренбург'];

export const HeaderMobile = () => (
  <Block>
    <Container>
      <div className={cx(styles.header, styles.top)}>
        <Select
          appearance='basic'
          level='l1'
          arr={city}
          editable
          before={<LocationIcon />}
        />
        <Text level='l1'>
          Среднее время доставки*:
          <b> 00:24:19</b>
        </Text>
      </div>
    </Container>
    <Divider />
  </Block>
);
