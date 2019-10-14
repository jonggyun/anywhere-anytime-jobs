import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  width: 100vw;
  height: 3.125rem;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #283e4b;
  color: #fff;
  font-weight: 900;
`;

const Navigation = styled.nav`
  width: 68.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  a:link,
  a:active,
  a:visited {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
`;

const Icon = styled.i`
  font-size: 1.5rem;
  margin-left: 1.25rem;

  :hover {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Navigation>
        <Title>
          <Link to="/">Anywhere Anytime Jobs</Link>
        </Title>
        <div>
          <Icon className="fas fa-pen" />
          <Icon className="fas fa-sign-in-alt" />
        </div>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
