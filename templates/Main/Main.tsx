import React from 'react';
// import { useAppDispatch } from '@hooks';
import { Container } from '@shared/ui/Blocks';
// import { setBasketModalIsOpened } from '@store/slices/basketModal.slice';
// import { TemplateCartModal } from '../TemplateCartModal/TemplateCartModal';
// import { ProductCustomization } from '../ProductCustomization';

export const Main = () =>
  // const { basketModalIsOpened } = useSelector(basketModalState);
  // const dispatch = useAppDispatch();

  // const handleCloseModalCart = () => {
  //   dispatch(setBasketModalIsOpened(false));
  // };

   (
     <Container>
       {/* <ProductCustomization /> */}
       {/* <TemplateCartModal */}
       {/*  setModal={handleCloseModalCart} */}
       {/*  modal={basketModalIsOpened} */}
       {/* /> */}
       {/* {!isDesktop && <BasketButtonMobile />} */}
     </Container>
  );
