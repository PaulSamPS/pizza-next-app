import React, { useContext } from 'react';
import { Title } from '@shared/ui/Typography';
import * as filterByType from '@shared/helpers/filterByType';
import { ProductCard } from '@entities';
import { useSelector } from 'react-redux';
import { productState } from '@shared/store/selector';
import { DeviceContext } from '@shared/context';
import { useScrollToBlock } from '@shared/hooks/useScrollToBlock';
import desktop from './ProductListDesktop.module.scss';
import mobile from './ProductListMobille.module.scss';
import { Pizza } from './ui';

export const ProductList = () => {
  const { pizza, items } = useSelector(productState);
  const { isDesktop } = useContext(DeviceContext);
  const styles = isDesktop ? desktop : mobile;
  const { pizzaRef, drinkRef, snackRef } = useScrollToBlock();

  return (
    <div className={styles['product-list']}>
      <Pizza pizza={pizza} ref={pizzaRef} />
      <Title level='3'>Закуски</Title>
      <div className={styles.items} ref={snackRef}>
        {filterByType.snack(items).map((snack) => (
          <ProductCard key={snack.id} item={snack} />
        ))}
      </div>
      <Title level='3'>Напитки</Title>
      <div className={styles.items} ref={drinkRef}>
        {filterByType.drink(items).map((drink) => (
          <ProductCard key={drink.id} item={drink} />
        ))}
      </div>
    </div>
  );
};
