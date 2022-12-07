import React from 'react';
import { Icon, Text } from '@components';
import { ArrowDownIcon } from '@helpers/icons/12';
import cx from 'clsx';
import styles from './styles/SelectValue.module.scss';
import { SelectProps } from './types/Select.props';
import { UseSelect } from './hooks/useSelect';
import { TextProps } from '../Text/Text.props';

interface SelectValueProps
  extends Pick<SelectProps, 'placeholder' | 'before'>,
    Pick<UseSelect, 'show' | 'showItems' | 'location'>,
    Pick<TextProps, 'level'> {}

export const SelectValue = ({
  placeholder,
  before,
  show,
  showItems,
  location,
  level,
}: SelectValueProps) => (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
  <div className={styles.value} onClick={showItems} role='listitem'>
    {before && <Icon primary>{before}</Icon>}
    <Text level={level}>{placeholder || location}</Text>
    <ArrowDownIcon className={cx(styles.arrow, show && styles.open)} />
  </div>
);
