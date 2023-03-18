import React from 'react';
import { ArrowDownIcon } from '@shared/assets/icons/12';
import cx from 'clsx';
import { TypeAttributes } from '@shared/types';
import { Icon, SelectProps, Text } from '@shared/ui';
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
    role='menuitem'
    tabIndex={0}
  >
    {before && <Icon primary>{before}</Icon>}
    <Text level={level}>{value}</Text>
    <ArrowDownIcon className={cx(styles.arrow, show && styles.open)} />
  </div>
);
