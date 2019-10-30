import React from 'react';
import styled from 'styled-components';

import palette from 'styles/palette';

import Badge from 'components/common/Badge';
import JobContent from 'components/job/JobContent';
import JobNews from 'components/job/JobNews';

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

interface JobDetailProps {}
const JobDetail: React.FC<JobDetailProps> = () => {
  return (
    <Wrapper>
      <Image src="https://fakeimg.pl/100x100" />
      <Name>회사명</Name>
      <Info>
        <InfoText>홈페이지 주소</InfoText>
        <InfoText>회사 진짜 주소</InfoText>
      </Info>
      <div>
        <Badge name="anywhere">Anywhere</Badge>
        <Badge name="anytime">Anytime</Badge>
      </div>
      <ContentWrapper>
        <MainInfo>
          <JobContent title="회사소개" content="" />
          <JobContent title="Anywhere" content="" />
          <JobContent title="Anytime" content="" />
        </MainInfo>
        <SideInfo>
          <div>지도를 나타냅니다.</div>
          <JobNews />
        </SideInfo>
      </ContentWrapper>
    </Wrapper>
  );
};

export default JobDetail;
