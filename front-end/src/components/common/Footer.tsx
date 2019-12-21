import React from 'react';
import styled from 'styled-components';

import palette from 'styles/palette';
import { responsiveSize } from 'styles/common';

const Wrapper = styled.section`
  height: 18.75rem;
  width: 100vw;
  background-color: ${palette.gray8};
  color: #fff;
  display: flex;
  margin-top: 3rem;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${responsiveSize.desktop.sm}) {
    flex-direction: column;
    height: 12.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;

  @media screen and (max-width: ${responsiveSize.desktop.sm}) {
    font-size: 1.5rem;
  }
`;

const Info = styled.div`
  font-size: 0.75rem;

  @media screen and (max-width: ${responsiveSize.desktop.sm}) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const Contact = styled.div`
  font-size: 1.875rem;
  text-align: right;
  margin-bottom: 0.5rem;

  @media screen and (max-width: ${responsiveSize.desktop.sm}) {
    margin-left: 0.3125rem;
  }
`;

const Alink = styled.a`
  color: #fff;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Title>Anywhere Anytime Jobs</Title>
      <Info>
        <Contact>
          <Alink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jonggyun"
          >
            <i className="fab fa-github"></i>
          </Alink>
        </Contact>
        <span>© 2019. JongGyun Park. All Right Reserved.</span>
      </Info>
    </Wrapper>
  );
};

export default Footer;
