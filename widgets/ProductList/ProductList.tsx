import React, { useContext } from 'react';
import { Title } from '@shared/ui/Typography';
import * as filterByType from '@shared/helpers/filterByType';
import { ProductCard } from '@entities';
import { useSelector } from 'react-redux';
import { productState } from '@shared/store/selector';
import { DeviceContext } from '@shared/context';
import { BasketButtonMobile } from '@shared/ui';
import { useRouter } from 'next/router';
import { PizzaCard } from '../../entities/PizzaCard/PizzaCard';
import desktop from './ProductListDesktop.module.scss';
import mobile from './ProductListMobille.module.scss';

export const ProductList = () => {
  const { pizza, items } = useSelector(productState);
  const { isDesktop } = useContext(DeviceContext);
  const router = useRouter();
  const styles = isDesktop ? desktop : mobile;

  return (
    <div className={styles['product-list']}>
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
      <Title level='3'>Закуски</Title>
      <div className={styles.items}>
        {filterByType.snack(items).map((snack) => (
          <ProductCard key={snack.id} item={snack} />
        ))}
      </div>
      <Title level='3'>Напитки</Title>
      <div className={styles.items}>
        {filterByType.drink(items).map((drink) => (
          <ProductCard key={drink.id} item={drink} />
        ))}
      </div>
      {router.pathname === '/' && !isDesktop && <BasketButtonMobile />}
    </div>
  );
};
