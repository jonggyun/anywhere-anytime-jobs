import React from 'react';
import styled from 'styled-components';

import Header from './Header';

import common from 'styles/common';

const Wrapper = styled.div`
  overflow: hidden;
  margin: 0;
  height: 100%;
`;

const Content = styled.section`
  position: relative;
  padding-top: ${common.headerHeight};
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: auto;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;
