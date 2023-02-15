import React, { useContext } from 'react';
import { Text } from '@components/Typography';
import { DeviceContext } from '@context';
import desktop from './desktop.module.scss';
import mobile from './mobile.module.scss';

interface CabinetOrderCardProps {
  title: string;
  value: string;
  date?: string;
}

export const InfoOrder = ({ date, value, title }: CabinetOrderCardProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const classes = isDesktop ? desktop : mobile;

  return (
    <div className={classes['order-card']}>
      <Text level='l1' className={classes.title}>
        {title}
      </Text>
      <div className={classes.info}>
        <Text level='l2' className={classes.number}>
          {value}
        </Text>
        {date && (
          <Text level='l2' className={classes.date}>
            22.01.23
          </Text>
        )}
      </div>
    </div>
  );
};
