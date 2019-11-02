import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';
// import Footer from 'components/common/Footer';

import JobCardsContainer from 'containers/job/JobCardsContainer';

const Wrapper = styled.section`
  width: 68.75rem;
  padding: 2rem 0.5rem;
`;

const Main: React.FC = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <JobCardsContainer />
        </Wrapper>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
