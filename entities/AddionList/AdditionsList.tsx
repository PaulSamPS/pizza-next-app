import React from 'react';
import { Button } from '@components/Blocks';
import cx from 'clsx';
import { ArrowDownSmallIcon } from '@helpers/icons/16';
import styles from './AdditionsList.module.scss';

type ModalProductCustomizationAdditionsProps = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollContainerBy: (distance: number) => void;
  containerRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  distance: number;
  isDesktop: boolean;
};

export const AdditionsList = ({
  containerRef,
  scrollContainerBy,
  canScrollRight,
  canScrollLeft,
  children,
  distance,
  isDesktop,
}: ModalProductCustomizationAdditionsProps) => (
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
          className={cx(styles['arrow-right'], !canScrollRight && styles.none)}
          disabled={!canScrollRight}
          onClick={() => scrollContainerBy(distance)}
        >
          <ArrowDownSmallIcon />
        </Button>
      </>
    )}
    <div className={styles.items} ref={containerRef}>
      {children}
    </div>
  </div>
);
