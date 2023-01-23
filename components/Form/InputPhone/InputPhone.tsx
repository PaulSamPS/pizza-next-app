import React, { ChangeEvent, forwardRef, LegacyRef, useContext } from 'react';
import NumberFormat from 'react-number-format';
import { DeviceContext } from '@context';
import stylesDesktop from './InputPhoneDesktop.module.scss';
import stylesMobile from './InputPhoneMobile.module.scss';

type InputPhoneProps = {
  value: string;
  setValues: (value: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

export const InputPhone = forwardRef(
  (
    { value, setValues, name }: InputPhoneProps,
    ref: LegacyRef<NumberFormat<unknown>> | undefined
  ) => {
    const { isDesktop } = useContext(DeviceContext);

    const classes = isDesktop ? stylesDesktop : stylesMobile;

    return (
      <div className={classes.input}>
        <NumberFormat
          ref={ref}
          name='phone'
          format='+7 (###) ###-##-##'
          mask='_'
          placeholder='+7 (123) 456-78-90'
          value={value}
          autoComplete='off'
          onChange={setValues}
        />
        <label htmlFor='phone'>{name}</label>
      </div>
    );
  }
);
