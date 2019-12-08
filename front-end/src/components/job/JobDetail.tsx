import React from 'react';
import styled from 'styled-components';

import palette from 'styles/palette';

import Badge from 'components/common/Badge';
import JobContent from 'components/job/JobContent';
import JobNews from 'components/job/JobNews';
import JobMap from 'components/job/JobMap';

import { RuleType, NewsType } from 'store/job/types';

import config from 'config';

const Wrapper = styled.section`
  width: inherit;
`;

const Image = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  margin: 1.25rem 0;
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 0.625rem 0;
`;

const Info = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.span`
  font-size: 0.75rem;
  color: ${palette.gray5};
  margin-right: 1.5rem;
`;

const Homepage = styled(InfoText)`
  :hover {
    cursor: pointer;
    font-weight: 700;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const MainInfo = styled.article`
  flex: 1;
`;

const SideInfo = styled.article`
  width: 18.75rem;
  margin-left: 1rem;
`;

interface JobDetailProps {
  onClickHomePage: (homepage: string) => void;
  company: string;
  homepage: string;
  location: string;
  anywhere: RuleType;
  anytime: RuleType;
  logo: File | string;
  description: string;
  news: Array<NewsType>;
}
const JobDetail: React.FC<JobDetailProps> = ({
  onClickHomePage,
  company,
  homepage,
  location,
  anywhere,
  anytime,
  logo,
  description,
  news,
}) => {
  return (
    <Wrapper>
      {logo && (
        <Image src={`${config.AWS.S3.BUCKET}${logo}`} alt="company_logo" />
      )}
      {!logo && (
        <Image
          src="https://fakeimg.pl/100x100/?text=NoImage&font=roboto"
          alt="company_logo"
        />
      )}
      <Name>{company}</Name>
      <Info>
        {homepage && (
          <Homepage onClick={() => onClickHomePage(homepage)}>
            {homepage}
          </Homepage>
        )}
        {location && <InfoText>{location}</InfoText>}
      </Info>
      <div>
        {anywhere && <Badge name="anywhere">Anywhere</Badge>}
        {anytime && <Badge name="anytime">Anytime</Badge>}
      </div>
      <ContentWrapper>
        <MainInfo>
          <JobContent type="company" title="회사소개" content={description} />
          {anywhere && (
            <JobContent
              type="anywhere"
              title="Anywhere"
              content={anywhere.rule}
            />
          )}
          {anytime && (
            <JobContent type="anytime" title="Anytime" content={anytime.rule} />
          )}
        </MainInfo>
        <SideInfo>
          <JobMap company={company} location={location} />
          <JobNews news={news} />
        </SideInfo>
      </ContentWrapper>
    </Wrapper>
  );
};

export default JobDetail;
