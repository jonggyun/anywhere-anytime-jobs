import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';
import SignUpContainer from 'containers/auth/SignUpContainer';

import { CenterAlign } from 'styles/common';

const SignUpWrapper = styled(CenterAlign)``;

const SignUpPage: React.FC = () => {
  return (
    <Layout>
      <SignUpWrapper>
        <SignUpContainer />
      </SignUpWrapper>
    </Layout>
  );
};

export default SignUpPage;
