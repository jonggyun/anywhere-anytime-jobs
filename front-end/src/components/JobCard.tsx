import React from 'react';
import styled from 'styled-components';

import palette from 'styles/palette';

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
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${palette.gray0};
`;

interface BadgeProps {
  type: string;
}
const Badge = styled.span<BadgeProps>`
  padding: 0.25rem 0.875rem;
  margin-left: 0.3125rem;
  border-radius: 1rem;
  background-color: ${({ type }) =>
    type === 'anywhere' ? `${palette.blue9}` : `${palette.blue6}`};
`;

interface JobCardProps {
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
}
const JobCard: React.FC<JobCardProps> = ({
  company,
  location,
  anywhere,
  anytime,
}) => {
  return (
    <Wrapper>
      <Image src="https://fakeimg.pl/75x75" alt="company_image" />
      <Company>{company}</Company>
      <Location>
        {location && (
          <>
            <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;{location}
          </>
        )}
      </Location>
      <PossibleContent>
        {anywhere && <Badge type="anywhere">Anywhere</Badge>}
        {anytime && <Badge type="anytime">Anytime</Badge>}
      </PossibleContent>
    </Wrapper>
  );
};

export default JobCard;
