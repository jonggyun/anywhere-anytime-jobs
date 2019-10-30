import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article``;

interface JobNewsProps {}
const JobNews: React.FC<JobNewsProps> = () => {
  return (
    <Wrapper>
      <h3>NEWS</h3>
      <div>기사 링크를 걸어둡니다.</div>
      <div>기사 링크를 걸어둡니다.</div>
      <div>기사 링크를 걸어둡니다.</div>
    </Wrapper>
  );
};

export default JobNews;
