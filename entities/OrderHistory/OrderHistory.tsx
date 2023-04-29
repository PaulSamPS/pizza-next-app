import React from 'react';
import { useRouter } from 'next/router';
import { getOneOrder } from '@shared/api';
import { useSelector } from 'react-redux';
import { oneOrderState, userState } from '@shared/store/selector';
import { useAppDispatch } from '@shared/hooks';
import { Card, Container, Text } from '@shared/ui';
import Image from 'next/image';
import { endOf } from '@shared/helpers';
import styles from './OrderHistory.module.scss';
import { OrderCard } from '../OrderCard';

export const OrderHistory = () => {
  const router = useRouter();
  const { user } = useSelector(userState);
  const { order } = useSelector(oneOrderState);
  const [isOrder, setIsOrder] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getOneOrder(router.query.id, user.id)).then(() => {
      setIsOrder(true);
    });
  }, []);

  return (
    <Container>
      {isOrder && (
        <div className={styles['order-history']}>
          <OrderCard order={order} />
          {order.products.map((p) => (
            <Card className={styles['order-card']}>
              {p.pizza ? (
                <Image
                  className={styles.image}
                  src={
                    p.dough === 'Традиционное'
                      ? `http://localhost:5000/product/${p.pizza.name}/${p.pizza.img.regular}`
                      : `http://localhost:5000/product/${p.pizza.name}/${p.pizza.img.slim}`
                  }
                  alt={p.pizza.name}
                  width={84}
                  height={84}
                />
              ) : (
                <Image
                  className={styles.image}
                  src={`http://localhost:5000/product/${p.product.name}/${p.product.img}`}
                  alt={p.product.name}
                  width={84}
                  height={84}
                />
              )}
              <div className={styles.info}>
                <Text level='l2' weight='w1' className={styles.name}>
                  {p.pizza ? p.pizza.name : p.product.name}
                </Text>
                <Text level='l1' className={styles.extra}>
                  {p.dough
                    ? `${p.dough} , ${p.size} см`
                    : `${
                        p.product.type === 'drink'
                          ? p.product.description
                          : p.product.weight
                      } ${p.product.type !== 'drink' ? 'гр' : ''}`}
                </Text>
                <div className={styles.bot}>
                  <div className={styles.count}>
                    <Text level='l2' weight='w1'>
                      {`${p.qty} ${endOf(p.qty, 'товар', 'товара', 'товаров')}`}
                    </Text>
                  </div>
                  <Text level='l2' weight='w1' className={styles.price}>
                    {`${p.price} ₽`}
                  </Text>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};
