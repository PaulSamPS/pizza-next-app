import { DividerProps } from './Divider.props';
import styles from './Divider.module.scss';

export const Divider = ({
  className,
  ...restProps
}: DividerProps): JSX.Element => (
  <hr className={styles.divider} {...restProps} />
);
