import React, { createContext, PropsWithChildren } from 'react';

export interface IDeviceContext {
  isDesktop: boolean;
}

export const DeviceContext = createContext<IDeviceContext>({
  isDesktop: false,
});

export const DeviceContextProvider = ({
  children,
  isDesktop,
}: PropsWithChildren<IDeviceContext>): JSX.Element => {
  const desktop = React.useMemo(() => ({ isDesktop }), [isDesktop]);
  return (
    <DeviceContext.Provider value={desktop}>{children}</DeviceContext.Provider>
  );
};
