import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';
import JobCards from 'components/JobCards';
// import HolderContainer from 'containers/HolderContainer';
// import CompaniesContainer from 'containers/CompaniesContainer';

const Wrapper = styled.section`
  width: 68.75rem;
  background-color: #fff;
  padding: 2rem 0.5rem;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 0.5rem;
  margin-left: 0.625rem;
`;

const Main: React.FC = () => {
  return (
    <Layout>
      <Wrapper>
        <Title>전체</Title>
        <JobCards />
      </Wrapper>
    </Layout>
  );
};

export default Main;
