import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';
import LogIn from 'components/LogIn';

import { CenterAlign } from 'styles/common';

const LogInWrapper = styled(CenterAlign)``;

const LogInPage: React.FC = () => {
  return (
    <Layout>
      <LogInWrapper>
        <LogIn />
      </LogInWrapper>
    </Layout>
  );
};

export default LogInPage;
