import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';

import { NewsType } from 'store/job/types';

import { UnderLine, responsiveSize } from 'styles/common';
import palette from 'styles/palette';

import { htmlConvertToString } from 'lib/regex';

const Wrapper = styled.article`
  margin-top: 1rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  padding: 0;
  margin: 0;
`;

const News = styled.div`
  margin-top: 1rem;
  line-height: 1.2;
  :hover {
    cursor: pointer;
    font-weight: 700;
  }
`;

const NewsBorder = styled(UnderLine)`
  width: 3.75rem;
  display: block;
`;

const NewsTitle = styled.span`
  display: block;
  font-size: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media screen and (max-width: ${responsiveSize.desktop.sm}) {
    font-size: 0.75rem;
  }
`;

const NewsDate = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${palette.gray5};

  @media screen and (max-width: ${responsiveSize.desktop.sm}) {
    font-size: 10px;
  }
`;

interface JobNewsProps {
  news: Array<NewsType>;
}
const JobNews: React.FC<JobNewsProps> = ({ news }) => {
  const handleOnClick = (link: string) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <Wrapper>
      <Title>NEWS</Title>
      <NewsBorder />
      {news.map(item => (
        <News key={item.title} onClick={() => handleOnClick(item.link)}>
          <NewsTitle>{htmlConvertToString(item.title)}</NewsTitle>
          <NewsDate>{format(new Date(item.pubDate), 'yyyy.MM.dd')}</NewsDate>
        </News>
      ))}
    </Wrapper>
  );
};

export default JobNews;
