import { useSelector } from 'react-redux';
import { userState } from '@store/selector';
import { FunctionComponent } from 'react';
import { IDeviceContext } from '@context';
import { Container } from '@components/Blocks';
import Error401 from '../pages/401';

export const withAuth =
  <T extends Record<string, unknown> & IDeviceContext>(
    Component: FunctionComponent<T>
  ) =>
  (props: T) => {
    const { user } = useSelector(userState);

    if (!user.phone) {
      return (
        <Container>
          <Error401 />
        </Container>
      );
    }

    return <Component {...props} />;
  };
