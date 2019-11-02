import React from 'react';
import styled from 'styled-components';
import { UnderLine } from 'styles/common';

const Wrapper = styled.article`
  margin: 1rem 0;
  min-height: 12.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Content = styled.span`
  font-size: 0.875rem;
`;

interface TitleBorderProps {
  type: string;
}
const TitleBorder = styled(UnderLine)<TitleBorderProps>`
  display: block;
  width: ${({ type }) => (type === 'anywhere' ? '7.5rem' : '6rem')};
  margin-bottom: 0.5rem;
`;

interface JobContentProps {
  type: string;
  title: string;
  content: string;
}
const JobContent: React.FC<JobContentProps> = ({ type, title, content }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <TitleBorder type={type} />
      <Content>{content ? content : '입력된 내용이 없습니다.😢'}</Content>
    </Wrapper>
  );
};

export default JobContent;
