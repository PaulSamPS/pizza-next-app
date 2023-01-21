import React, { useContext } from 'react';
import { Text } from '@components/Typography';
import { RadioGroup } from '@entities';
import { DeviceContext } from '@context';
import desktop from './RadioItems.desktop.module.scss';
import mobile from './RadioItems.mobile.module.scss';
import type { RadioItemsProps } from './RadioItems.interface';

export const RadioItems = ({
  items,
  onChange,
  value,
  title,
  id,
}: RadioItemsProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const classes = isDesktop ? desktop : mobile;

  return (
    <div className={classes['radio-items']}>
      <Text level='l2' className={classes.title}>
        {title}
      </Text>
      <RadioGroup
        items={items}
        nameGroup={id}
        className={classes.items}
        onChangeRadio={onChange}
        value={value}
      />
    </div>
  );
};
