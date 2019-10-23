import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';
import Footer from 'components/Footer';

import JobCardsContainer from 'containers/JobCardsContainer';

const Wrapper = styled.section`
  width: 68.75rem;
  padding: 2rem 0.5rem;
`;

// const Title = styled.h1`
//   font-size: 20px;
//   font-weight: 900;
//   margin-bottom: 0.5rem;
//   margin-left: 0.625rem;
// `;

const Main: React.FC = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          {/* <Title>전체</Title> */}
          <JobCardsContainer />
        </Wrapper>
      </Layout>
      <Footer />
    </>
  );
};

export default Main;
