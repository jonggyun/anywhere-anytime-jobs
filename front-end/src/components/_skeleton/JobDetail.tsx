import React from 'react';
import styled from 'styled-components';

import { Skeleton } from 'styles/common';

import JobContent from 'components/_skeleton/JobContent';

const Image = styled(Skeleton)`
  margin: 1.25rem 0;
`;

const Name = styled(Skeleton)`
  margin: 0 0 0.625rem 0;
`;

const Info = styled(Skeleton)`
  display: flex;
  margin-bottom: 0.5rem;
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

const MapTitle = styled(Skeleton)``;

const MapBoder = styled(Skeleton)``;

const Map = styled(Skeleton)``;

const Newstitle = styled(Skeleton)``;

const NewsBorder = styled(Skeleton)``;

const News = styled(Skeleton)``;

interface JobDetailProps {}
const JobDetail: React.FC<JobDetailProps> = () => (
  <React.Fragment>
    <Image width="6.25rem" height="6.25rem" />
    <Name width="7.5rem" height="1.875rem" />
    <Info width="18.75rem" height="1rem" />
    <Skeleton width="6.25rem" height="1.25rem" />
    <ContentWrapper>
      <MainInfo>
        <JobContent />
        <JobContent />
        <JobContent />
      </MainInfo>
      <SideInfo>
        <MapTitle width="9.375rem" height="1.5rem" marginBottom="0.5rem" />
        <MapBoder width="9.375rem" height="1rem" marginBottom="0.5rem" />
        <Map width="20.3125rem" height="18.75rem" marginBottom="1rem" />
        <Newstitle width="9.375rem" height="1.5rem" marginBottom="0.5rem" />
        <NewsBorder width="9.375rem" height="1rem" marginBottom="1rem" />
        <News width="12.5rem" height="1.875rem" marginBottom="0.5rem" />
        <News width="12.5rem" height="1.875rem" marginBottom="0.5rem" />
        <News width="12.5rem" height="1.875rem" marginBottom="0.5rem" />
        <News width="12.5rem" height="1.875rem" marginBottom="0.5rem" />
        <News width="12.5rem" height="1.875rem" marginBottom="0.5rem" />
      </SideInfo>
    </ContentWrapper>
  </React.Fragment>
);

export default JobDetail;
