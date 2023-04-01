import { useAppDispatch } from '@shared/hooks/index';
import axios from 'axios';
import {
  BasketPizzaType,
  BasketType,
  IPizzaServer,
  IProductServer,
} from '@shared/types';
import { priceCartFromSize } from '@shared/helpers';
import { setSuccessBasket } from '@shared/store/slices/basket.slice';

interface UseQtyProps {
  size: string;
  product: IProductServer;
  pizza: IPizzaServer;
  item: Omit<BasketPizzaType, 'pizza'>;
}

interface UseQtyReturn {
  decrease: (items: UseQtyProps) => void;
  increase: (items: UseQtyProps) => void;
}

export const useQty = (): UseQtyReturn => {
  const dispatch = useAppDispatch();

  const decrease = async (item: UseQtyProps) => {
    try {
      const newBasket = await axios.post<BasketType>(
        'http://localhost:5000/api/basket/decrease',
        {
          productId: item.pizza ? item.pizza._id : item.product._id,
          productPrice: item.pizza
            ? item.pizza.price[priceCartFromSize(item.size)]
            : item.product.price,
          size: item.item.size,
          dough: item.item.dough,
        },
        { withCredentials: true }
      );
      dispatch(setSuccessBasket(newBasket.data));
    } catch (e) {
      console.log(e);
    }
  };

  const increase = async (item: UseQtyProps) => {
    try {
      const newBasket = await axios.post<BasketType>(
        'http://localhost:5000/api/basket/increase',
        {
          productId: item.pizza ? item.pizza._id : item.product._id,
          productPrice: item.pizza
            ? item.pizza.price[priceCartFromSize(item.size)]
            : item.product.price,
          size: item.item.size,
          dough: item.item.dough,
        },
        { withCredentials: true }
      );
      dispatch(setSuccessBasket(newBasket.data));
    } catch (e) {
      console.log(e);
    }
  };

  return { decrease, increase };
};
