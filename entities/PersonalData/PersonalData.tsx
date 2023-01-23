import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { Input, InputPhone } from '@components/Form';
import type { DeliveryFrom, FormProps } from '@types';
import { Controller } from 'react-hook-form';
import desktop from './PersonalDataDesktop.module.scss';
import mobile from './PersonalDataMobile.module.scss';

interface PersonalDataProps
  extends Omit<FormProps<DeliveryFrom>, 'handleSubmit'> {}

export const PersonalData = ({
  register,
  errors,
  control,
}: PersonalDataProps) => {
  const { isDesktop } = useContext(DeviceContext);

  const classes = isDesktop ? desktop : mobile;

  return (
    <div className={classes['personal-data']}>
      <Input
        {...register('name', {
          required: { value: true, message: 'Введите имя' },
        })}
        error={errors.name}
        id='name'
        text='Имя*'
        placeholder='Иван'
      />
      <Controller
        name='phone'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputPhone
            value={value}
            setValues={onChange}
            name='Номер телефона*'
          />
        )}
      />
      <Input
        {...register('email', {
          required: { value: true, message: 'Введите email' },
        })}
        error={errors.email}
        id='email'
        text='Почта*'
        placeholder='mail@gmail.com'
      />
    </div>
  );
};
