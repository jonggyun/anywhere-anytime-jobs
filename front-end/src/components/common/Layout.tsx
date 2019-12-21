import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

import Header from './Header';

import common from 'styles/common';

const Wrapper = styled.div`
  overflow: hidden;
  margin: 0;
  height: 100%;
`;

interface ContentProps {
  isMain: boolean;
}
const Content = styled.section<ContentProps>`
  position: relative;
  padding-top: ${({ isMain }) => (isMain ? '0' : common.headerHeight)};
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: auto;
`;

const Layout: React.FC = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Header />
      <Content isMain={pathname === '/' ? true : false}>{children}</Content>
    </Wrapper>
  );
};

export default Layout;
