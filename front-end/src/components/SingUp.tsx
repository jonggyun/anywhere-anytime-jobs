import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import palette from 'styles/palette';

import Button from 'components/common/Button';
import { UnderLine } from 'styles/common';

const SignUpWrapper = styled.section`
  padding: 1.25rem;
  width: 23.125rem;
  border-radius: 0.3125rem;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 900;
  padding: 0;
  margin: 0;
`;

const TitleBorder = styled(UnderLine)`
  width: 4.375rem;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  outline: none;
  margin-top: 1rem;
  padding: 0.625rem;
  box-sizing: border-box;
  ::placeholder {
    color: ${palette.gray5};
  }
`;

const Content = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
  text-align: center;
  color: #000;
  text-decoration: none;
`;

interface SignUpProps {}
const SignUp: React.FC<SignUpProps> = () => {
  return (
    <SignUpWrapper>
      <Title>SignUp</Title>
      <TitleBorder />
      <Input type="text" placeholder="이메일" autoComplete="off" />
      <Input
        type="password"
        placeholder="비밀번호(숫자, 대소문자, 특수문자, 8자리 이상)"
        autoComplete="off"
      />
      <Input type="password" placeholder="비밀번호 확인" autoComplete="off" />
      <Button disabled={false}>회원가입</Button>
      <Content to="/login">
        이미 계정이 있으시다면? <b>로그인</b>
      </Content>
    </SignUpWrapper>
  );
};

export default SignUp;
