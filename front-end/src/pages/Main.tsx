import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';
// import HolderContainer from 'containers/HolderContainer';
// import CompaniesContainer from 'containers/CompaniesContainer';

const Wrapper = styled.section`
  width: 68.75rem;
  background-color: #fff;
`;

const Main: React.FC = () => {
  return (
    <Layout>
      <Wrapper>MainPage</Wrapper>
    </Layout>
  );
};

export default Main;
