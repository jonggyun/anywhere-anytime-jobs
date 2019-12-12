import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';

import LoginContainer from 'containers/auth/LoginContainer';

import { CenterAlign } from 'styles/common';

const LogInWrapper = styled(CenterAlign)``;

const LogInPage: React.FC = () => {
  return (
    <Layout>
      <LogInWrapper>
        <LoginContainer />
      </LogInWrapper>
    </Layout>
  );
};

export default LogInPage;
