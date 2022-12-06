import cx from 'clsx';
import { FlexProps } from './Flex.props';
import styles from './Flex.module.scss';

export const Flex = ({
  children,
  justify,
  align,
  direction,
  columnGap,
  ...restProps
}: FlexProps) => (
  <div
    className={cx(
      styles.flex,
      justify && styles[justify],
      align && styles[align],
      direction && styles[direction]
    )}
    style={{ columnGap }}
    {...restProps}
  >
    {children}
  </div>
);
