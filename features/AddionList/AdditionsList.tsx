import React, { useContext } from 'react';
import { Button } from '@shared/ui/Blocks';
import cx from 'clsx';
import { ArrowDownSmallIcon } from '@shared/assets/icons/16';
import { DeviceContext } from '@shared/context';
import { AdditionsType } from '@shared/types';
import styles from './AdditionsList.module.scss';
import { useScrollAdditions } from './hooks';
import { AdditionsItem } from './ui';

interface AdditionsListInterface
  extends React.AllHTMLAttributes<HTMLDivElement> {
  item: AdditionsType[];
}

export const AdditionsList = ({ item }: AdditionsListInterface) => {
  const { isDesktop } = useContext(DeviceContext);
  const { containerRef, scrollContainerBy, canScrollLeft, canScrollRight } =
    useScrollAdditions();

  return (
    <div className={styles.additions}>
      {isDesktop && (
        <>
          <Button
            width={30}
            height={30}
            appearance='primary'
            className={cx(styles['arrow-left'], !canScrollLeft && styles.none)}
            disabled={!canScrollLeft}
            onClick={() => scrollContainerBy(-105)}
          >
            <ArrowDownSmallIcon />
          </Button>
          <Button
            width={30}
            height={30}
            appearance='primary'
            className={cx(
              styles['arrow-right'],
              !canScrollRight && styles.none
            )}
            disabled={!canScrollRight}
            onClick={() => scrollContainerBy(105)}
          >
            <ArrowDownSmallIcon />
          </Button>
        </>
      )}
      <div className={styles.items} ref={containerRef}>
        {item.map((i) => (
          <AdditionsItem key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
};
