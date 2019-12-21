import React from 'react';
import styled from 'styled-components';

import Layout from 'components/common/Layout';

import CreateJobContainer from 'containers/job/CreateJobContainer';
import { responsiveSize } from 'styles/common';

const Wrapper = styled.div`
  width: 68.75rem;
  padding: 0.625rem;

  @media screen and (max-width: ${responsiveSize.desktop.sm}) {
    width: 100%;
  }
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
