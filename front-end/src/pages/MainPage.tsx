import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';

import JobCardsContainer from 'containers/job/JobCardsContainer';

const Wrapper = styled.section``;

const Main: React.FC = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <JobCardsContainer />
        </Wrapper>
      </Layout>
    </>
  );
};

export default Main;
