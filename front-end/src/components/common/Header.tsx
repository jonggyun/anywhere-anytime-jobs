import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import common from 'styles/common';
import palette from 'styles/palette';

const Wrapper = styled.section`
  width: 100vw;
  height: ${common.headerHeight};
  position: fixed;
  display: flex;
  justify-content: center;
  color: #fff;
  font-weight: 900;
  z-index: 1;
  background-color: #fff;
  border-bottom: 1px solid ${palette.gray2};
`;

const Navigation = styled.nav`
  width: 68.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  color: ${palette.blue9};
  font-size: 1.25rem;
  font-weight: 700;

  a:link,
  a:active,
  a:visited {
    color: ${palette.blue9};
    text-decoration: none;
    letter-spacing: -0.5px;
  }
  a:hover {
    cursor: pointer;
    letter-spacing: -0.5px;
  }
`;

const Login = styled.span`
  padding: 0.5rem 1.75rem;
  box-sizing: content-box;
  border: 1px solid ${palette.gray3};
  border-radius: 1.25rem;
  color: ${palette.blue9};
  font-size: 0.75rem;
  :link,
  :active,
  :visited {
    color: ${palette.blue9};
  }
  :hover {
    background-color: ${palette.blue9};
    color: #fff;
    border: 1px solid ${palette.blue9};
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Navigation>
        <Title>
          <Link to="/">
            <span>Anywhere Anytime Jobs</span>
          </Link>
        </Title>
        <div>
          <Link to="/login">
            <Login>LOGIN</Login>
          </Link>
        </div>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
