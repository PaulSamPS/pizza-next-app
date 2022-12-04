import React from 'react';
import { Text } from '@components';
import { classNames } from '@lib';
import styles from './Tab.module.scss';

const sizes = ['20', '28', '32'];

export const Tab = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  return (
    <div className={styles.tab}>
      {sizes.map((s, index) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          role='tab'
          tabIndex={0}
          key={index}
          className={classNames(
            styles.item,
            activeIndex === index && styles.active
          )}
          onClick={() => setActiveIndex(index)}
        >
          <Text level='3'>{`${s} см`}</Text>
        </div>
      ))}
    </div>
  );
};
