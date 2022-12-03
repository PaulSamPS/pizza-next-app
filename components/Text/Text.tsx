import * as React from 'react';
import { classNames } from 'lib';
import { TextProps } from './Text.props';

export const Text = ({
  children,
  weight,
                       level,
  Component = 'span',
  center,
  ...restProps
}: TextProps) => (
  <Component
    {...restProps}
    className={classNames(
      'text',
      weight && `text-w-${weight}`,
        level && `text-l-${level}`
    )}
  >
    {children}
  </Component>
);
