import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { Text } from '@shared/ui';
import moment from 'moment';
import desktop from './desktop.module.scss';
import mobile from './mobile.module.scss';

interface CabinetOrderCardProps {
  orderNumber: string;
  date: Date;
  sum: number;
  status: string;
  paymentMethod: string;
}

export const InfoOrder = ({
  orderNumber,
  status,
  date,
  sum,
  paymentMethod,
}: CabinetOrderCardProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const classes = isDesktop ? desktop : mobile;

  return (
    <div className={classes['order-card']}>
      <div className={classes.item}>
        <Text level='l1' className={classes.title}>
          Заказ
        </Text>
        <div className={classes.info}>
          <Text level='l2' className={classes.number}>
            № {orderNumber}
          </Text>
          <Text level='l2' className={classes.date}>
            {moment(date).format('DD MM YYYY')}
          </Text>
        </div>
      </div>
      <div className={classes.item}>
        <Text level='l1' className={classes.title}>
          Сумма
        </Text>
        <div className={classes.info}>
          <Text level='l2' className={classes.number}>
            {sum} ₽
          </Text>
        </div>
      </div>
      <div className={classes.item}>
        <Text level='l1' className={classes.title}>
          Статус
        </Text>
        <div className={classes.info}>
          <Text level='l2' className={classes.number}>
            {status}
          </Text>
        </div>
      </div>
      <div className={classes.item}>
        <Text level='l1' className={classes.title}>
          Оплачено
        </Text>
        <div className={classes.info}>
          <Text level='l2' className={classes.number}>
            {paymentMethod}
          </Text>
        </div>
      </div>
    </div>
  );
};
