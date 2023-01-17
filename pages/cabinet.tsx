import React from 'react';
import { withLayout, withAuth } from '@hoc';
import { Title } from '@components/Typography';

const Cabinet = () => <Title level='1'>Cabinet</Title>;

export default withLayout(withAuth(Cabinet));
