import { Title } from '@shared/ui';
import React, { forwardRef, useContext } from 'react';
import { PizzaCard } from '@entities';
import type { IPizzaLocal } from '@shared/types';
import { DeviceContext } from '@shared/context';
import desktop from './PizzaDesktop.module.scss';
import mobile from './PizzaMobile.module.scss';

interface PizzaProps {
  pizza: IPizzaLocal[];
}

export const Pizza = forwardRef(
  ({ pizza }: PizzaProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { isDesktop } = useContext(DeviceContext);
    const classes = isDesktop ? desktop : mobile;

    return (
      <div className={classes.pizza} ref={ref}>
        <Title level='3'>Пицца</Title>
        <div className={classes.items}>
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
    );
  }
);
