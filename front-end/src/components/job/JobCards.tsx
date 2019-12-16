import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { JobType } from 'store/job/types';

import MenuButton from 'components/common/MenuButton';

import JobCardContainer from 'containers/job/JobCardConatiner';

const Wrapper = styled.section``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const JobCardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

interface JobCardsProps {
  jobs: Array<JobType>;
  isLoggedIn: boolean;
}
const JobCards: React.FC<JobCardsProps> = ({ jobs, isLoggedIn }) => {
  return (
    <Wrapper>
      {isLoggedIn && (
        <ButtonWrapper>
          <Link to="/create">
            <MenuButton theme="blue">Add JOB</MenuButton>
          </Link>
        </ButtonWrapper>
      )}
      <JobCardsWrapper>
        {jobs &&
          jobs.map(job => (
            <JobCardContainer
              key={job.companyId}
              companyId={job.companyId}
              company={job.company}
              location={job.location}
              anywhere={job.anywhere}
              anytime={job.anytime}
              logo={job.logo}
            />
          ))}
      </JobCardsWrapper>
    </Wrapper>
  );
};

export default JobCards;
