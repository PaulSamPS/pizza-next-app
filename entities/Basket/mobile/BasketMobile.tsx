import React, { useContext } from 'react';
import { Text, Title } from '@components/Typography';
import { Button, Divider, Tab } from '@components/Blocks';
import type { DeliveryFrom } from '@types';
import { AdditionsList } from '@entities';
import { useScrollAdditions } from '@hooks';
import { DeviceContext } from '@context';
import styles from './BasketMobile.module.scss';
import { AdditionCard } from '../../AdditionCard/AdditionCard';
import type { BasketProps } from '../basket.interface';
import { BasketDelivery } from '../../BasketDelivery';
import { PersonalData } from '../../PersonalData';
import { BasketProduct } from '../../BasketProduct';

export const BasketMobile = ({ ...props }: BasketProps) => {
  const { containerRef, scrollContainerBy, canScrollLeft, canScrollRight } =
    useScrollAdditions();
  const { isDesktop } = useContext(DeviceContext);
  const onSubmit = async (formData: DeliveryFrom) => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={props.handleSubmit(onSubmit)}
      className={styles['basket-mobile']}
    >
      <Title level='3'>Ваш Заказ</Title>
      <div className={styles.order}>
        <BasketProduct size='small' />
      </div>
      <Text level='l3' weight='w1' className={styles.sum}>
        Итого: 2 379 ₽
      </Text>
      <Divider className={styles.divider} />
      <Title level='3'>Добавить к заказу?</Title>
      <div className={styles.additions}>
        <AdditionsList
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          scrollContainerBy={scrollContainerBy}
          containerRef={containerRef}
          distance={310}
          isDesktop={isDesktop}
        >
          {props.additions.map((addition) => (
            <AdditionCard key={addition.id} addition={addition} />
          ))}
        </AdditionsList>
      </div>
      <Divider />
      <Title level='3'>Соусы</Title>
      <div className={styles.sauces}>
        <AdditionsList
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          scrollContainerBy={scrollContainerBy}
          containerRef={containerRef}
          distance={310}
          isDesktop={isDesktop}
        >
          {props.sauces.map((sauce) => (
            <AdditionCard key={sauce.id} addition={sauce} />
          ))}
        </AdditionsList>
      </div>
      <Divider className={styles.divider} />
      <Title level='3'>Личные данные</Title>
      <PersonalData
        register={props.register}
        errors={props.errors}
        control={props.control}
      />
      <Title level='3'>Доставка</Title>
      <Tab
        arr={props.deliveryMethod}
        currentValue={props.valueDeliveryMethod}
        setValue={props.setValueDeliveryMethod}
      />
      <BasketDelivery
        control={props.control}
        errors={props.errors}
        register={props.register}
        arrRadioFirst={props.arrRadioFirst}
        arrRadioSecond={props.arrRadioSecond}
        arrRadioThird={props.arrRadioThird}
      />
      <div className={styles.checkout}>
        <Text level='l3' weight='w1' className={styles['checkout-sum']}>
          Итого: 2 379 ₽
        </Text>
        <Button appearance='primary' type='submit' height={48}>
          Оформить заказ
        </Button>
      </div>
    </form>
  );
};
