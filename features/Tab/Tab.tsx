import React from 'react';
import { Button } from '@shared/ui';
import cx from 'clsx';
import styles from './Tab.module.scss';

interface TabProps extends React.AllHTMLAttributes<HTMLElement> {
  arr: string[];
  currentSize?: (size: string) => void;
  currentDough?: (dough: string) => void;
  currentValue: string;
  setValue?: (value: string) => void;
}

export const Tab = ({
  arr,
  currentSize,
  currentDough,
  currentValue,
  setValue,
  className,
}: TabProps) => {
  const handleClick = (value: string) => {
    if (currentSize) {
      currentSize(value);
    }
    if (currentDough) {
      currentDough(value);
    }
    if (setValue) {
      setValue(value);
    }
  };

  return (
    <div className={cx(className, styles.tab)}>
      {arr.map((value, index) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <Button
          appearance='primary'
          tabIndex={0}
          key={index}
          onClick={() => handleClick(value)}
          className={cx(styles.item, value === currentValue && styles.active)}
        >
          {value}
        </Button>
      ))}
    </div>
  );
};
