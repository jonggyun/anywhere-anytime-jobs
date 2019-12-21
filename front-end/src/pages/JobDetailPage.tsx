import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';
import Footer from 'components/common/Footer';

import JobDetailContainer from 'containers/job/JobDetailContainer';
import { responsiveSize } from 'styles/common';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DetailWrapper = styled.div`
  width: 68.75rem;
  display: flex;

  @media screen and (max-width: ${responsiveSize.desktop.lg}) {
    width: 95%;
  }
`;

interface JobDetailPageProps {}
const JobDetailPage: React.FC<JobDetailPageProps> = () => {
  return (
    <Layout>
      <Wrapper>
        <DetailWrapper>
          <JobDetailContainer />
        </DetailWrapper>
        <Footer />
      </Wrapper>
    </Layout>
  );
};

export default JobDetailPage;
