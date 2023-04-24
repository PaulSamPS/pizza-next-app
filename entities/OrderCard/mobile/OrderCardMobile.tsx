import React from 'react';
import { Card, Divider } from '@shared/ui/Blocks';
import { Text } from '@shared/ui/Typography';
import { InfoOrder, ProductPreview } from '../ui';
import styles from './OrderCardMobile.module.scss';
import { OrderCardProps } from '../type';

export const OrderCardMobile = ({ order }: OrderCardProps) => (
  <Card className={styles.card}>
    <div className={styles.top}>
      <div className={styles.border} />
      <InfoOrder
        date={order.date}
        orderNumber={order.orderNumber}
        paymentMethod={order.info.payment}
        status={order.status}
        sum={order.totalPrice}
      />
      <div className={styles.address}>
        <Text level='l1' className={styles.address}>
          Адрес
        </Text>
        {order.info.street && (
          <Text level='l2' className={styles['address-value']}>
            ул.
            {order.info.street}
          </Text>
        )}
      </div>
    </div>
    <Divider />
    <div className={styles['products-preview']}>
      {order.products &&
        order.products
          .slice(0, 3)
          .map((i) => (
            <ProductPreview
              key={i._id}
              name={i.pizza ? i.pizza.name : i.product.name}
              img={i.pizza ? i.pizza.img.regular : i.product.img}
            />
          ))}
    </div>
  </Card>
);
