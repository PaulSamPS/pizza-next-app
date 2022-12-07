import React, { useContext } from 'react';
import { Select, Text } from '@components';
import { LocationIcon } from '@helpers/icons/20';
import { DeviceContext } from '@context';
import styles from './styles/Location.module.scss';

interface LocationProps {
  arr: string[];
}

export const Location = ({ arr }: LocationProps) => {
  const { isDesktop } = useContext(DeviceContext);

  return (
    <div className={styles.location}>
      <Select arr={arr} editable before={<LocationIcon />} level='l3' />
      {isDesktop && <Text level='l3'>Проверить адрес</Text>}
      <Text level='l3'>
        Среднее время доставки*:
        <b> 00:24:19</b>
      </Text>
    </div>
  );
};
