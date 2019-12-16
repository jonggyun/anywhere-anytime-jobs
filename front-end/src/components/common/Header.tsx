import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'store';

import common from 'styles/common';
import palette from 'styles/palette';

import { logOutRequest } from 'store/auth/actions';

import MenuButton from 'components/common/MenuButton';

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

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  const onClickLogOut = () => {
    dispatch(logOutRequest());
  };

  return (
    <Wrapper>
      <Navigation>
        <Title>
          <Link to="/">
            <span>Anywhere Anytime Jobs</span>
          </Link>
        </Title>
        <div>
          {!isLoggedIn && (
            <Link to="/login">
              <MenuButton>LOG IN</MenuButton>
            </Link>
          )}
          {isLoggedIn && (
            <MenuButton onClick={onClickLogOut}>LOG OUT</MenuButton>
          )}
        </div>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
