import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';
import Login from 'components/Login';

const LoginWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <LoginWrapper>
        <Login />
      </LoginWrapper>
    </Layout>
  );
};

export default LoginPage;
