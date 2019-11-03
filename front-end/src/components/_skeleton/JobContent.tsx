import React from 'react';
import styled from 'styled-components';

import { Skeleton } from 'styles/common';

const Wrapper = styled.article`
  margin: 1rem 0;
  min-height: 12.5rem;
`;

const JobContent = () => (
  <Wrapper>
    <Skeleton height="3.125rem" width="6.25rem" marginBottom="0.5rem" />
    <Skeleton height="0.625rem" width="6.25rem" marginBottom="0.5rem" />
    <Skeleton height="1.25rem" width="28.125rem" marginBottom="0.5rem" />
    <Skeleton height="1.25rem" width="25rem" marginBottom="0.5rem" />
    <Skeleton height="1.25rem" width="29.375rem" marginBottom="0.5rem" />
    <Skeleton height="1.25rem" width="26.875rem" marginBottom="0.5rem" />
    <Skeleton height="1.25rem" width="25rem" />
  </Wrapper>
);

export default JobContent;
