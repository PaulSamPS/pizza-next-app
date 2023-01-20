import React from 'react';
import { Block, Container, Divider } from '@components/Blocks';
import cx from 'clsx';
import { Select } from '@components/Form';
import { LocationIcon } from '@helpers/icons/20';
import { Text } from '@components/Typography';
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
