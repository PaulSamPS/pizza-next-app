import React from 'react';
import { ModalProduct } from '@components/Blocks';
import { PizzaCustomization } from '@entities';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { productModalState } from '@store/selector';
import { ProductCardModalMobile } from '../../entities/ProductCardModal';

export const TemplateProductCustomization = () => {
  const { pizza, product } = useSelector(productModalState);
  const router = useRouter();
  const queryName = Object.keys(router.query)[0];

  return (
    <ModalProduct modal={!!queryName} setModal={() => router.push('/')}>
      {queryName === 'pizza' && <PizzaCustomization pizza={pizza!} />}
      {queryName === 'snack' && (
        <ProductCardModalMobile
          name={product!.name}
          price={product!.price}
          img={product!.img}
          description={product!.description}
          weight={product!.weight}
          promotion={product!.promotion}
        />
      )}
    </ModalProduct>
  );
};
