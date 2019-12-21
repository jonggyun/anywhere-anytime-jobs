import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'store';

import common, { responsiveSize } from 'styles/common';
import palette from 'styles/palette';

import { logOutRequest } from 'store/auth/actions';

import MenuButton from 'components/common/MenuButton';

interface WrapperProps {
  defaultTheme: boolean;
}
const Wrapper = styled.section<WrapperProps>`
  width: 100vw;
  height: ${common.headerHeight};
  position: fixed;
  display: flex;
  justify-content: center;
  color: #fff;
  font-weight: 900;
  z-index: 1;
  ${({ defaultTheme }) =>
    defaultTheme &&
    css`
      background-color: #fff;
      border-bottom: 1px solid ${palette.gray2};
    `};

  @media screen and (max-width: ${responsiveSize.desktop.lg}) {
    height: ${common.mobileHeaderHeight};
  }
`;

const Navigation = styled.nav`
  width: 68.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${responsiveSize.desktop.lg}) {
    width: 90%;
  }
`;

interface TitleProps {
  defaultTheme: boolean;
}
const Title = styled.span<TitleProps>`
  color: ${({ defaultTheme }) => (defaultTheme ? palette.blue9 : '#fff')};
  font-size: 1.25rem;
  font-weight: 700;

  a:link,
  a:active,
  a:visited {
    color: ${({ defaultTheme }) => (defaultTheme ? palette.blue9 : '#fff')};
    text-decoration: none;
    letter-spacing: -0.5px;
  }
  a:hover {
    cursor: pointer;
    letter-spacing: -0.5px;
  }

  @media screen and (max-width: ${responsiveSize.desktop.sm}) {
    font-size: 1rem;
  }
`;

const ProgressbarWrapper = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${palette.gray0};
  position: fixed;
  align-self: flex-end;
`;

interface ProgressbarProps {
  barWidth: number;
}
const Progressbar = styled.div.attrs(({ barWidth }: { barWidth: number }) => ({
  style: {
    width: `${barWidth}%`,
    borderRadius: barWidth === 100 ? '0' : '5px',
  },
}))<ProgressbarProps>`
  background-color: ${palette.blue9};
  height: 0.5rem;
`;

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const [isOverImage, setIsOverImage] = useState(false);
  const [barWidth, setBarWidth] = useState(0);

  const isMainPage = useMemo(() => pathname === '/', [pathname]);
  const isDefaultHeader = useMemo(() => isOverImage || !isMainPage, [
    isMainPage,
    isOverImage,
  ]);

  const onMainImage = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    scrollTop > 550 ? setIsOverImage(true) : setIsOverImage(false);
  };

  const onProgressBar = useCallback(() => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const currentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / currentHeight) * 100;

    if (isMainPage) {
      setBarWidth(scrolled);
    }
  }, [isMainPage]);

  const onScroll = useCallback(() => {
    let throttling;

    if (!throttling) {
      throttling = setTimeout(() => {
        throttling = false;
        onMainImage();
      }, 500);
    }
    onProgressBar();
  }, [onProgressBar]);

  const onClickLogOut = () => {
    dispatch(logOutRequest());
  };

  useEffect(() => {
    if (isMainPage) {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      if (isMainPage) {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, [onScroll, isMainPage]);

  return (
    <Wrapper defaultTheme={isDefaultHeader}>
      <Navigation>
        <Title defaultTheme={isDefaultHeader}>
          <Link to="/">
            <span>Anywhere Anytime Jobs</span>
          </Link>
        </Title>
        <div>
          {!isLoggedIn && (
            <Link to="/login">
              <MenuButton theme={isDefaultHeader ? 'blue' : 'white'}>
                LOG IN
              </MenuButton>
            </Link>
          )}
          {isLoggedIn && (
            <MenuButton
              theme={isDefaultHeader ? 'blue' : 'white'}
              onClick={onClickLogOut}
            >
              LOG OUT
            </MenuButton>
          )}
        </div>
      </Navigation>
      {isMainPage && isDefaultHeader && (
        <ProgressbarWrapper>
          <Progressbar barWidth={barWidth} />
        </ProgressbarWrapper>
      )}
    </Wrapper>
  );
};

export default Header;
