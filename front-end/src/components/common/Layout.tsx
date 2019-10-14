import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Body = styled.body``;

const Layout: React.FC = ({ children }) => {
  return (
    <Body>
      <Header />
      {children}
    </Body>
  );
};

export default Layout;
