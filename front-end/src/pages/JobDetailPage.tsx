import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';

import JobDetailContainer from 'containers/job/JobDetailContainer';

const Wrapper = styled.section`
  width: 68.75rem;
  padding: 0.625rem;
`;

interface JobDetailPageProps {}
const JobDetailPage: React.FC<JobDetailPageProps> = () => {
  return (
    <Layout>
      <Wrapper>
        <JobDetailContainer />
      </Wrapper>
    </Layout>
  );
};

export default JobDetailPage;
