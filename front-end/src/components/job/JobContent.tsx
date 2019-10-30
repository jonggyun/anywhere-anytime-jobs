import React from 'react';
import styled from 'styled-components';
import { UnderLine } from 'styles/common';

const Wrapper = styled.article`
  margin: 1rem 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Content = styled.span`
  font-size: 0.875rem;
`;

const TitleBorder = styled(UnderLine)`
  display: block;
  width: 7.5rem;
  margin-bottom: 0.5rem;
`;

interface JobContentProps {
  title: string;
  content: string;
}
const JobContent: React.FC<JobContentProps> = ({ title, content }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <TitleBorder />
      <Content>
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
      </Content>
    </Wrapper>
  );
};

export default JobContent;
