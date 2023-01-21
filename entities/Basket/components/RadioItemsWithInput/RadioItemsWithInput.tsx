import React, { useContext } from 'react';
import { Text } from '@components/Typography';
import { RadioGroup } from '@entities';
import { Input } from '@components/Form';
import { DeviceContext } from '@context';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { RadioItemsProps } from '../RadioItems/RadioItems.interface';
import desktop from './RadioItemsWithInput.desktop.module.scss';
import mobile from './RadioItemsWithInput.mobile.module.scss';
import type { DeliveryFrom } from '../../mobile';

interface RadioItemsWithInputProps extends RadioItemsProps {
  placeholder: string;
  register: UseFormRegister<DeliveryFrom>;
  errors: FieldErrors<DeliveryFrom>;
}
export const RadioItemsWithInput = ({
  items,
  title,
  value,
  id,
  onChange,
  placeholder,
  register,
  errors,
}: RadioItemsWithInputProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const classes = isDesktop ? desktop : mobile;

  return (
    <div className={classes['radio-items-with-input']}>
      <Text level='l2' className={classes.title}>
        {title}
      </Text>
      <div className={classes.column}>
        <RadioGroup
          items={items}
          nameGroup={id}
          className={classes.items}
          onChangeRadio={onChange}
          value={value}
        />
        {value === items[1].value && (
          <Input
            {...register('changeMoney', {
              required: { value: true, message: 'Введите сумму' },
            })}
            className={classes.input}
            id={id}
            error={errors.changeMoney}
            after={<Text level='l3'>₽</Text>}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};
