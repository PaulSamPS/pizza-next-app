import React from 'react';
import cx from 'clsx';
import { Radio } from '@shared/ui';
import styles from './RadioGroup.module.scss';

interface Items {
  id: string;
  value: string;
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
        key={i.value}
        id={i.value}
        currentValue={value}
        nameGroup={nameGroup}
        onChange={(e) => onChangeRadio(e.target.value)}
      >
        {i.value}
      </Radio>
    ))}
  </div>
);
