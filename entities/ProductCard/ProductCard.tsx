import React from 'react';
import { IPizzaLocal, IProductLocal } from '@types';
import { TemplateProductCustomization } from '@templates';
import { Title } from '@components/Typography';
import { ProductCardDesktop } from './ProductCardDesktop';
import { ProductCardMobile } from './ProductCardMobile';
import { PizzaCardDesktop } from './PizzaCardDesktop';
import { PizzaCardMobile } from './PizzaCardMobile';
import styles from './ProductCard.module.scss';
import * as filterByType from './filterByType';

interface Products {
  pizzas: IPizzaLocal[];
  items: IProductLocal[];
  isDesktop: boolean;
}

export const ProductCard = ({ pizzas, isDesktop, items }: Products) => {
  const desktop = (
    <>
      {pizzas.map((item) => (
        <PizzaCardDesktop
          key={item.id}
          img={item.img.regular}
          name={item.name}
          price={item.price[0]}
          type={item.type}
          badge={item.badge}
          pathname={item.pathname}
          description={item.description}
        />
      ))}
      {items.map((item) => (
        <ProductCardDesktop
          key={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          type={item.type}
          badge={item.badge}
          pathname={item.pathname}
          description={item.description}
          inCart
        />
      ))}
    </>
  );

  const mobile = (
    <div className={styles['card-list']}>
      <Title level='3'>Пицца</Title>
      {pizzas.map((item) => (
        <PizzaCardMobile
          key={item.id}
          img={item.img.regular}
          name={item.name}
          price={item.price[0]}
          type={item.type}
          badge={item.badge}
          pathname={item.pathname}
          description={item.description}
        />
      ))}
      <Title level='3'>Напитки</Title>
      {filterByType.drink(items).map((item) => (
        <ProductCardMobile
          key={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          type={item.type}
          badge={item.badge}
          pathname={item.pathname}
          description={item.description}
          inCart
        />
      ))}
      <Title level='3'>Закуски</Title>
      {filterByType.snack(items).map((item) => (
        <ProductCardMobile
          key={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          type={item.type}
          badge={item.badge}
          pathname={item.pathname}
          description={item.description}
          inCart
        />
      ))}
    </div>
  );

  return (
    <>
      {isDesktop ? desktop : mobile}
      <TemplateProductCustomization />
    </>
  );
};
