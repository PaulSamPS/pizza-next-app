import React from 'react';
import { Button } from '@components/Blocks';
import cx from 'clsx';
import { ArrowDownSmallIcon } from '@helpers/icons/16';
import { StaticImageData } from 'next/image';
import styles from './ModalProductCustomizationAdditions.module.scss';
import { AddToPizza } from './AddToPizza';

type Additions = {
  id: number;
  name: string;
  img: StaticImageData;
  price: string;
};

type ModalProductCustomizationAdditionsProps = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollContainerBy: (distance: number) => void;
  containerRef: React.RefObject<HTMLDivElement>;
  additions: Additions[];
};

export const ModalProductCustomizationAdditions = ({
  containerRef,
  scrollContainerBy,
  canScrollRight,
  canScrollLeft,
  additions,
}: ModalProductCustomizationAdditionsProps) => (
  <div className={styles.additions}>
    <Button
      width={30}
      height={30}
      appearance='primary'
      className={cx(styles['arrow-left'], !canScrollLeft && styles.none)}
      disabled={!canScrollLeft}
      onClick={() => scrollContainerBy(-115)}
    >
      <ArrowDownSmallIcon />
    </Button>
    <Button
      width={30}
      height={30}
      appearance='primary'
      className={cx(styles['arrow-right'], !canScrollRight && styles.none)}
      disabled={!canScrollRight}
      onClick={() => scrollContainerBy(115)}
    >
      <ArrowDownSmallIcon />
    </Button>
    <div className={styles.items} ref={containerRef}>
      {additions.map((item) => (
        <AddToPizza
          key={item.id}
          image={item.img}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  </div>
);
