import React from 'react';
import styled from 'styled-components';

import JobCard from 'components/JobCard';
import { JobType } from 'store/job/types';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

interface JobCardsProps {
  jobs: Array<JobType>;
}
const JobCards: React.FC<JobCardsProps> = ({ jobs }) => {
  return (
    <Wrapper>
      {jobs.map((job) => (
        <JobCard
          key={job.companyId}
          company={job.company}
          location={job.location}
          anywhere={job.anywhere}
          anytime={job.anytime}
        />
      ))}
    </Wrapper>
  );
};

export default JobCards;
