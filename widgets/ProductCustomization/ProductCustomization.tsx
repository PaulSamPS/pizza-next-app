import React, { useMemo } from 'react';
import { ModalProduct } from '@shared/ui/Blocks';
import { ProductCardModal } from '@entities';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { productModalState } from '@shared/store/selector';
import { PizzaCustomization } from 'features';

export const ProductCustomization = () => {
  const { pizza, product } = useSelector(productModalState);
  const router = useRouter();
  const query = useMemo(
    () => router.query.drink || router.query.snack,
    [router.query]
  );
  const queryModal = useMemo(() => router.query.pizza || query, [router.query]);

  return (
    <ModalProduct modal={!!queryModal} setModal={() => router.replace('/')}>
      {router.query.pizza && <PizzaCustomization pizza={pizza!} />}
      {query && (
        <ProductCardModal
          id={product!.id}
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
