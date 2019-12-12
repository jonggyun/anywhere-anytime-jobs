import React from 'react';
import styled from 'styled-components';

import palette from 'styles/palette';

import Badge from 'components/common/Badge';

import config from 'config';

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
  :hover {
    cursor: pointer;
    border: 1px solid ${palette.gray5};
  }
`;

const Image = styled.img`
  width: 4.6875rem;
  height: 4.6875rem;
  border-radius: 0.3125rem;
  border: 1px solid ${palette.gray2};
`;

const Company = styled.h1`
  font-size: 1.25rem;
  font-weight: 900;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 0.625rem;
  box-sizing: border-box;
  :hover {
    color: ${palette.blue9};
  }
`;

const Location = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${palette.gray6};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 0.625rem;
  box-sizing: border-box;
  min-height: 1.125rem;
`;

const PossibleContent = styled.span`
  text-align: right;
`;

interface JobCardProps {
  handleOnClick: () => void;
  company: string;
  location: string;
  anywhere?: {
    rule: string;
    permission: boolean;
  };
  anytime?: {
    rule: string;
    permission: boolean;
  };
  logo?: File | string;
}
const JobCard: React.FC<JobCardProps> = ({
  handleOnClick,
  company,
  location,
  anywhere,
  anytime,
  logo,
}) => {
  return (
    <Wrapper onClick={handleOnClick}>
      {logo && (
        <Image src={`${config.AWS.S3.BUCKET}${logo}`} alt="company_logo" />
      )}
      {!logo && (
        <Image src="https://fakeimg.pl/75x75/?text=No" alt="company_image" />
      )}
      <Company>{company}</Company>
      <Location>
        {location && (
          <>
            <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;{location}
          </>
        )}
      </Location>
      <PossibleContent>
        {anywhere && <Badge name="anywhere">Anywhere</Badge>}
        {anytime && <Badge name="anytime">Anytime</Badge>}
      </PossibleContent>
    </Wrapper>
  );
};

export default JobCard;
