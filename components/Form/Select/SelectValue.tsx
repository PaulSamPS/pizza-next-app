import React from 'react';
import { Text } from '@components/Typography';
import { Icon } from '@components/Blocks';
import { ArrowDownIcon } from '@helpers/icons/12';
import cx from 'clsx';
import { TypeAttributes } from '@types';
import { SelectProps } from '@components/Form/Select';
import styles from './styles/SelectValue.module.scss';
import { UseSelect } from './hooks/useSelect';

interface SelectValueProps
  extends Pick<SelectProps, 'before' | 'appearance'>,
    Pick<UseSelect, 'show' | 'showItems' | 'value'> {
  level?: TypeAttributes.Level;
}

export const SelectValue = ({
  before,
  show,
  showItems,
  value,
  level,
  appearance,
}: SelectValueProps) => (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
  <div
    className={cx(styles.value, styles[appearance])}
    onClick={showItems}
    role='listitem'
  >
    {before && <Icon primary>{before}</Icon>}
    <Text level={level}>{value}</Text>
    <ArrowDownIcon className={cx(styles.arrow, show && styles.open)} />
  </div>
);
