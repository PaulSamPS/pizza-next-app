import React from 'react';
import { Button } from '@components/Blocks';
import cx from 'clsx';
import styles from './Tab.module.scss';

interface TabProps extends React.AllHTMLAttributes<HTMLElement> {
  arr: string[];
  setSize?: (size: string) => void;
}

export const Tab = ({ arr, setSize, className }: TabProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const handleClick = (index: number, size: string) => {
    setActiveIndex(index);
    if (setSize) {
      setSize(size);
    }
  };

  return (
    <div className={cx(className, styles.tab)}>
      {arr.map((s, index) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <Button
          appearance='primary'
          tabIndex={0}
          key={index}
          onClick={() => handleClick(index, s)}
          className={cx(styles.item, activeIndex === index && styles.active)}
        >
          {s}
        </Button>
      ))}
    </div>
  );
};
