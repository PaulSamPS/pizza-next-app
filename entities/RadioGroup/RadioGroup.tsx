import React from 'react';
import { Radio } from '@components/Form';
import { Text } from '@components/Typography';
import styles from './RadioGroup.module.scss';

interface Items {
  id: string;
  name: string;
}

interface RadioGroupProps {
  items: Items[];
}

export const RadioGroup = ({ items }: RadioGroupProps) => {
  const [radio, setRadio] = React.useState<string>('Быстрее');

  return (
    <div className={styles['radio-group']}>
      {items.map((i) => (
        <Radio
          key={i.id}
          id={i.id}
          currentValue={radio}
          onChange={(e) => setRadio(e.target.value)}
        >
          {i.name}
        </Radio>
      ))}
      <Text level='l1'>{radio}</Text>
    </div>
  );
};
