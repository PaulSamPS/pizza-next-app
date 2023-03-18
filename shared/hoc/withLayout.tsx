import React, { FunctionComponent } from 'react';
import { DeviceContextProvider, IDeviceContext } from '@shared/context';
import { Layout } from '@shared/ui/Layout';

export const withLayout = <T extends Record<string, unknown> & IDeviceContext>(
  Component: FunctionComponent<T>
) =>
  function withLayoutComponent(props: T) {
    return (
      <DeviceContextProvider isDesktop={props.isDesktop}>
        <Layout>
          <Component {...props} />
        </Layout>
      </DeviceContextProvider>
    );
  };
