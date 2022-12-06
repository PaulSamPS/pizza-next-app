import React, { FunctionComponent } from 'react';
import { DeviceContextProvider, IDeviceContext } from '@context';

export const withLayout = <T extends Record<string, unknown> & IDeviceContext>(
  Component: FunctionComponent<T>
) =>
  function withLayoutComponent(props: T) {
    return (
      <DeviceContextProvider isDesktop={props.isDesktop}>
        <Component {...props} />
      </DeviceContextProvider>
    );
  };
