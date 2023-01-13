import React from 'react';
import { Title } from '@components/Typography';
import * as filterByType from '@helpers/filterByType';
import { ProductCard } from '@entities';
import { IPizzaLocal, IProductLocal } from '@types';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import desktop from './ProductListDesktop.module.scss';
import mobile from './ProductListMobille.module.scss';

type ProductListProps = {
  pizzas: IPizzaLocal[];
  product: IProductLocal[];
  isDesktop: boolean;
};

export const ProductList = ({
  pizzas,
  product,
  isDesktop,
}: ProductListProps) => {
  const styles = isDesktop ? desktop : mobile;

  return (
    <div className={styles['product-list']}>
      <Title level='3'>Пицца</Title>
      <div className={styles.items}>
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            badge={pizza.badge}
            name={pizza.name}
            img={pizza.img.regular}
            description={pizza.description}
            type={pizza.type}
            pathname={pizza.pathname}
            price={pizza.price[0]}
          />
        ))}
      </div>
      <Title level='3'>Закуски</Title>
      <div className={styles.items}>
        {filterByType.snack(product).map((snack) => (
          <ProductCard
            key={snack.id}
            badge={snack.badge}
            name={snack.name}
            img={snack.img}
            description={snack.description}
            type={snack.type}
            pathname={snack.pathname}
            price={snack.price}
            inCart
          />
        ))}
      </div>
      <Title level='3'>Напитки</Title>
      <div className={styles.items}>
        {filterByType.drink(product).map((snack) => (
          <ProductCard
            key={snack.id}
            badge={snack.badge}
            name={snack.name}
            img={snack.img}
            description={snack.description}
            type={snack.type}
            pathname={snack.pathname}
            price={snack.price}
            inCart={false}
          />
        ))}
      </div>
    </div>
  );
};
