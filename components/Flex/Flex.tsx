import { classNames } from '@lib';
import { FlexProps } from './Flex.props';

export const Flex = ({
  children,
  justifyC,
  align,
  columnGap,
  ...restProps
}: FlexProps) => (
  <div
    className={classNames(
      'flex',
      justifyC && `flex-justify-${justifyC}`,
      align && `flex-align-${align}`
    )}
    style={{ columnGap }}
    {...restProps}
  >
    {children}
  </div>
);
