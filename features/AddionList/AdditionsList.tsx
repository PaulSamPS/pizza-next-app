import React, { useContext } from 'react';
import { Button } from '@shared/ui/Blocks';
import cx from 'clsx';
import { ArrowDownSmallIcon } from '@shared/assets/icons/16';
import { DeviceContext } from '@shared/context';
import { AdditionsType } from '@shared/types';
import styles from './AdditionsList.module.scss';
import { useScrollAdditions } from './hooks';
import { AdditionsItem } from './ui';
import { AdditionCard } from './ui/AdditionCard/AdditionCard';

interface AdditionsListInterface
  extends React.AllHTMLAttributes<HTMLDivElement> {
  item: AdditionsType[];
  basket?: boolean;
  distance: number;
}

export const AdditionsList = ({
  basket = false,
  item,
  distance,
}: AdditionsListInterface) => {
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
            onClick={() => scrollContainerBy(-distance)}
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
            onClick={() => scrollContainerBy(distance)}
          >
            <ArrowDownSmallIcon />
          </Button>
        </>
      )}
      <div className={styles.items} ref={containerRef}>
        {item.map((i) =>
          (basket ? (
            <AdditionCard key={i.id} addition={i} />
          ) : (
            <AdditionsItem key={i.id} item={i} />
          )))}
      </div>
    </div>
  );
};
