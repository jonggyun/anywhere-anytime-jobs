import React from 'react';
import styled from 'styled-components';

import JobCard from 'components/JobCard';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

interface JobCardsProps {}
const JobCards: React.FC<JobCardsProps> = () => {
  return (
    <Wrapper>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </Wrapper>
  );
};

export default JobCards;
