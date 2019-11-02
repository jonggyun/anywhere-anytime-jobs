import React from 'react';
import styled from 'styled-components';

import { Skeleton } from 'styles/common';

const Wrapper = styled.article`
  margin: 1rem 0;
  min-height: 12.5rem;
`;

const JobContent = () => (
  <Wrapper>
    <Skeleton height="50px" width="100px" borderRadius="0" />
    <Skeleton height="10px" width="100px" borderRadius="0" />
    <Skeleton height="20px" width="200px" borderRadius="0" />
    <Skeleton height="20px" width="200px" borderRadius="0" />
    <Skeleton height="20px" width="200px" borderRadius="0" />
    <Skeleton height="20px" width="200px" borderRadius="0" />
    <Skeleton height="20px" width="200px" borderRadius="0" />
  </Wrapper>
);

export default JobContent;
