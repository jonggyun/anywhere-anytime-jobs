import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';
import SignUp from 'components/auth/SingUp';

import { CenterAlign } from 'styles/common';

const SignUpWrapper = styled(CenterAlign)``;

const SignUpPage: React.FC = () => {
  return (
    <Layout>
      <SignUpWrapper>
        <SignUp />
      </SignUpWrapper>
    </Layout>
  );
};

export default SignUpPage;
