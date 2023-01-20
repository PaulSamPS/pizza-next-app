import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '@store/store';
import React from 'react';
import { Router } from 'next/router';
import { Spinner } from '@components/Blocks';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });

    Router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
    });

    Router.events.on('routeChangeError', () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <Provider store={store}>
      {isLoading && <Spinner position='fixed' color='var(--black)' />}
      <Component {...props.pageProps} />
    </Provider>
  );
}
