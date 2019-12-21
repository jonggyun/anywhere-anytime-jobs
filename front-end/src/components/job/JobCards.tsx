import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { JobType } from 'store/job/types';

import MenuButton from 'components/common/MenuButton';
import JobCardContainer from 'containers/job/JobCardConatiner';

import common from 'styles/common';

import MainImage from 'assets/main.jpg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: ${common.imageHeight};
  overflow: hidden;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  filter: brightness(0.7);
`;

const ContentsWrapper = styled.div`
  width: 68.75rem;
  padding: 2rem 0.5rem;
  /* box-sizing: border-box; */
`;

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
      <ImageWrapper>
        <Image src={MainImage} alt="main_image" />
      </ImageWrapper>
      <ContentsWrapper>
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
      </ContentsWrapper>
    </Wrapper>
  );
};

export default JobCards;
