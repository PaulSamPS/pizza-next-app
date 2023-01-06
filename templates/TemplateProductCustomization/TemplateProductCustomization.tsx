import React from 'react';
import { ModalProductCustomization } from '@components/Blocks';
import { ProductCustomization } from '@entities';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { productModalState } from '../../store/selector/selector';

export const TemplateProductCustomization = () => {
  const { product } = useSelector(productModalState);
  const router = useRouter();

  return (
    <ModalProductCustomization
      modal={!!router.query.pizza}
      setModal={() => router.push('/')}
    >
      {product && <ProductCustomization product={product} />}
    </ModalProductCustomization>
  );
};
