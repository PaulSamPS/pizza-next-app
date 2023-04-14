import { Title } from '@shared/ui';
import React, { forwardRef } from 'react';
import { PizzaCard } from '@entities';
import { IPizzaLocal } from '@shared/types';
import styles from './Pizza.module.scss';

interface PizzaProps {
  pizza: IPizzaLocal[];
}

export const Pizza = forwardRef(
  ({ pizza }: PizzaProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <div className={styles.pizza} ref={ref}>
      <Title level='3'>Пицца</Title>
      <div className={styles.items}>
        {pizza.map((p) => (
          <PizzaCard
            key={p.id}
            badge={p.badge}
            name={p.name}
            img={p.img.regular}
            description={p.description}
            type={p.type}
            pathname={p.pathname}
            price={p.price[0]}
          />
        ))}
      </div>
    </div>
  )
);
