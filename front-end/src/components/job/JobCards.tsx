import React from 'react';
import styled from 'styled-components';

import { JobType } from 'store/job/types';

import JobCardContainer from 'containers/job/JobCardConatiner';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

interface JobCardsProps {
  // isLoading: boolean;
  jobs: Array<JobType>;
}
const JobCards: React.FC<JobCardsProps> = ({ jobs }) => {
  return (
    <Wrapper>
      {jobs.map(job => (
        <JobCardContainer
          key={job.companyId}
          companyId={job.companyId}
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
