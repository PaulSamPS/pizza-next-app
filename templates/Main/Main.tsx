import React, { useContext } from 'react';
import { Category, ProductList } from '@entities';
import { useSelector } from 'react-redux';
import { DeviceContext } from '@context';
import { useAppDispatch } from '@hooks';
import { BasketButtonMobile, Container } from '@components/Blocks';
import { basketModalState, productState } from '@store/selector';
import { setBasketModalIsOpened } from '@store/slices/basketModal.slice';
import { TemplateCartModal } from '../TemplateCartModal/TemplateCartModal';
import { TemplateProductCustomization } from '../TemplateProductCustomization';

export const Main = () => {
  const { pizza, items } = useSelector(productState);
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
        <ProductList pizzas={pizza} product={items} isDesktop={isDesktop} />
        <TemplateProductCustomization />
        <TemplateCartModal
          setModal={handleCloseModalCart}
          modal={basketModalIsOpened}
          product={pizza}
        />
        {!isDesktop && <BasketButtonMobile />}
      </Container>
    </>
  );
};
