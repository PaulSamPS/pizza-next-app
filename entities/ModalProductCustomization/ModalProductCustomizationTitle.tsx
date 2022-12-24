import React from 'react';
import { Icon } from '@components/Blocks';
import { PromotionsIcon } from '@helpers/icons/category';
import { Title } from '@components/Typography';
import { InfoIcon } from '@helpers/icons/24';
import styles from './ModalProductCustomizationTitle.module.scss';

type ModalProductCustomizationTitleProps = {
  name: string;
  promotion: boolean;
};

export const ModalProductCustomizationTitle = ({
  name,
  promotion,
}: ModalProductCustomizationTitleProps) => (
  <div className={styles.title}>
    <div className={styles.name}>
      {promotion && (
        <Icon>
          <PromotionsIcon />
        </Icon>
      )}
      <Title level='4' weight='w1'>
        {name}
      </Title>
    </div>
    <Icon className={styles.info}>
      <InfoIcon />
    </Icon>
  </div>
);
