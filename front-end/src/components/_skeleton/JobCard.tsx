import React from 'react';
import styled from 'styled-components';

import palette from 'styles/palette';

import { Skeleton } from 'styles/common';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid ${palette.gray2};
  padding: 0.625rem;
  width: 15.625rem;
  height: 18.75rem;
  margin: 0.625rem 0.75rem 1.25rem;
  background-color: #fff;
  box-sizing: border-box;
  user-select: none;
`;

const PossibleContent = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const JobCard: React.FC = () => {
  return (
    <Wrapper>
      <Skeleton height="4.6875rem" width="4.6875rem" borderRadius="0.3125rem" />
      <Skeleton height="1.25rem" width="80%" borderRadius="0" />
      <Skeleton height="1rem" width="100%" borderRadius="0" />
      <PossibleContent>
        <Skeleton height="1.25rem" width="5.625rem" borderRadius="0" />
        <Skeleton height="1.25rem" width="5.625rem" borderRadius="0" />
      </PossibleContent>
    </Wrapper>
  );
};

export default JobCard;
