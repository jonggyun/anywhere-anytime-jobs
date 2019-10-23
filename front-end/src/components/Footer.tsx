import React from 'react';
import styled from 'styled-components';

import palette from 'styles/palette';

const Wrapper = styled.section`
  height: 18.75rem;
  width: 100vw;
  background-color: ${palette.gray8};
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const Info = styled.div`
  font-size: 0.75rem;
`;

const Contact = styled.div`
  font-size: 1.875rem;
  text-align: right;
  margin-bottom: 0.5rem;
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
