import { DividerProps } from './Divider.props';

export const Divider = ({
  className,
  ...restProps
}: DividerProps): JSX.Element => <hr className='divider' {...restProps} />;
