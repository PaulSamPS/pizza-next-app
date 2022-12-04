import React from 'react';
import { Text } from '@components';
import { RadioProps } from './Radio.props';

export const Radio = ({ children, id }: RadioProps) => (
  <div className='radio'>
    <input type='radio' id={id} className='radio-input' name='radio-group' />
    <label htmlFor={id}>
      <Text level='3'>{children}</Text>
    </label>
  </div>
);
