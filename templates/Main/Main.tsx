import React, { useContext } from 'react';
import { Category, ProductCard } from '@entities';
import { useSelector } from 'react-redux';
import { DeviceContext } from '@context';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@hooks';
import { BasketButtonMobile } from '@components/Blocks';
import { TemplateCartModal } from '../TemplateCartModal/TemplateCartModal';
import { basketModalState, productState } from '../../store/selector/selector';
import { setBasketModalIsOpened } from '../../store/slices/basketModal.slice';

export const Main = () => {
  const { products } = useSelector(productState);
  const { basketModalIsOpened } = useSelector(basketModalState);
  const { isDesktop } = useContext(DeviceContext);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleCloseModalCart = () => {
    dispatch(setBasketModalIsOpened(false));
  };

  return (
    <>
      <Category />
      <ProductCard products={products} isDesktop={isDesktop} router={router} />
      <TemplateCartModal
        setModal={handleCloseModalCart}
        modal={basketModalIsOpened}
        product={products}
      />
      {!isDesktop && <BasketButtonMobile />}
    </>
  );
};
