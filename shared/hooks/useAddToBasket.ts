import axios from 'axios';
import { setSuccessBasket } from '@shared/store/slices/basket.slice';
import { useAppDispatch } from '@shared/hooks/index';

export const useAddToBasket = () => {
  const dispatch = useAppDispatch();

  const addItemToBasket = async (id: string, price: number) => {
    try {
      const { data: newBasket } = await axios.post(
        'http://localhost:5000/api/basket/add-product',
        {
          productId: id,
          productPrice: price,
        },
        { withCredentials: true }
      );
      dispatch(setSuccessBasket(newBasket));
    } catch (e) {
      console.log(e);
    }
  };

  return { addItemToBasket };
};
