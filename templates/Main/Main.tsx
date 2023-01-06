import React, { useContext } from 'react';
import { Category, ProductCard } from '@entities';
import { useSelector } from 'react-redux';
import { DeviceContext } from '@context';
import { useAppDispatch } from '@hooks';
import { BasketButtonMobile, Container } from '@components/Blocks';
import { TemplateCartModal } from '../TemplateCartModal/TemplateCartModal';
import { basketModalState, productState } from '../../store/selector/selector';
import { setBasketModalIsOpened } from '../../store/slices/basketModal.slice';

export const Main = () => {
  const { products } = useSelector(productState);
  const { basketModalIsOpened } = useSelector(basketModalState);
  const { isDesktop } = useContext(DeviceContext);
  const dispatch = useAppDispatch();

  const handleCloseModalCart = () => {
    dispatch(setBasketModalIsOpened(false));
  };

  return (
    <>
      <Category />
      <Container>
        <ProductCard products={products} isDesktop={isDesktop} />
        <TemplateCartModal
          setModal={handleCloseModalCart}
          modal={basketModalIsOpened}
          product={products}
        />
        {!isDesktop && <BasketButtonMobile />}
      </Container>
    </>
  );
};
