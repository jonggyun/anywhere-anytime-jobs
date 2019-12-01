import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';

import CreateJobContainer from 'containers/job/CreateJobContainer';

const Wrapper = styled.div`
  width: 68.75rem;
  padding: 0.625rem;
`;

interface CreateJobPagePrpos {}
const CreateJobPage: React.FC<CreateJobPagePrpos> = () => {
  return (
    <Layout>
      <Wrapper>
        <CreateJobContainer />
      </Wrapper>
    </Layout>
  );
};

export default CreateJobPage;
