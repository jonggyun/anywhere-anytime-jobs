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
  height: 13.75rem;
  margin: 0.625rem 0.75rem 1.25rem;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.3125rem;
  user-select: none;
  :hover {
    cursor: pointer;
    border: 1px solid ${palette.gray6};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

const Image = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 0.3125rem;
`;

const Company = styled.h1`
  font-size: 1.25rem;
  font-weight: 900;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Location = styled.span`
  font-size: 0.75rem;
  color: ${palette.gray6};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const PossibleContent = styled.span`
  text-align: right;
  font-size: 0.8125rem;
  text-transform: uppercase;
  color: ${palette.gray7};
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
      <Image src="https://fakeimg.pl/50x50" alt="company_image" />
      <Company>{company}</Company>
      <Location>{location}</Location>
      <PossibleContent>
        {anywhere && (
          <>
            Anywhere <i className="fas fa-home"></i>
          </>
        )}{' '}
        {anytime && (
          <>
            Anytime <i className="fas fa-clock"></i>
          </>
        )}
      </PossibleContent>
    </Wrapper>
  );
};

export default JobCard;
