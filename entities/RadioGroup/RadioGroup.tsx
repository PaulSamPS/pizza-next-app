import React from 'react';
import { Radio } from '@components/Form';
import cx from 'clsx';
import styles from './RadioGroup.module.scss';

interface Items {
  id: string;
  name: string;
}

interface RadioGroupProps extends React.AllHTMLAttributes<HTMLDivElement> {
  items: Items[];
  nameGroup: string;
  onChangeRadio: (e: string) => void;
  value: string;
}

export const RadioGroup = ({
  items,
  nameGroup,
  onChangeRadio,
  value,
  className,
}: RadioGroupProps) => (
  <div className={cx(styles['radio-group'], className)}>
    {items.map((i) => (
      <Radio
        key={i.name}
        id={i.name}
        currentValue={value}
        nameGroup={nameGroup}
        onChange={(e) => onChangeRadio(e.target.value)}
      >
        {i.name}
      </Radio>
    ))}
  </div>
);
