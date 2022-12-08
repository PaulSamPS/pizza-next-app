import React from 'react';
import { Button } from '@components/Blocks';
import styles from './Tab.module.scss';

interface TabProps extends React.AllHTMLAttributes<HTMLElement> {
  arr: string[];
}

export const Tab = ({ arr }: TabProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  return (
    <div className={styles.tab}>
      {arr.map((s, index) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <Button
          appearance='primary'
          tabIndex={0}
          key={index}
          tabActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        >
          {s}
        </Button>
      ))}
    </div>
  );
};
