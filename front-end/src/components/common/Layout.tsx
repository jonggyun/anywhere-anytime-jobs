import React from 'react';
import styled from 'styled-components';

import Header from './Header';

import common from 'styles/common';

const Content = styled.section`
  position: relative;
  padding-top: ${common.headerHeight};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
