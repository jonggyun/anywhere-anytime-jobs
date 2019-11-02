import React from 'react';
import styled from 'styled-components';

import JobCard from 'components/_skeleton/JobCard';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const JobCards: React.FC = () => (
  <Wrapper>
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
  </Wrapper>
);

export default JobCards;
