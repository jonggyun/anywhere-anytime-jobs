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
  height: 11.25rem;
  margin: 0.625rem 0.75rem;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.3125rem;
`;

const Image = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 0.3125rem;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 900;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Address = styled.span`
  font-size: 0.75rem;
  color: ${palette.gray6};
  text-overflow: ellipsis;
  overflow: hidden;
`;

const PossibleContent = styled.span`
  text-align: right;
  font-size: 0.8125rem;
  text-transform: uppercase;
`;

interface JobCardProps {}
const JobCard: React.FC<JobCardProps> = () => {
  return (
    <Wrapper>
      <Image src="https://fakeimg.pl/50x50" alt="company_image" />
      <Title>TitleTitleTitleTitleTitleTitle</Title>
      <Address>
        AddressAddressAddressAddressAddressAddressAddressAddressAddressAddress
      </Address>
      <PossibleContent>
        Only <b>Anywhere</b> <i className="fas fa-home"></i>
        {/* Only <b>Anytime</b> <i className="fas fa-clock"></i> */}
      </PossibleContent>
    </Wrapper>
  );
};

export default JobCard;
