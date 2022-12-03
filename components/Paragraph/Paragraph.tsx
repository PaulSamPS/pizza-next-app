import * as React from 'react';
import { classNames } from 'lib';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph = ({
  Component = 'p',
  weight,
  children,
  ...restProps
}: ParagraphProps) => (
  <Component
    {...restProps}
    className={classNames('paragraph', weight && `paragraph-w-${weight}`)}
  >
    {children}
  </Component>
);
