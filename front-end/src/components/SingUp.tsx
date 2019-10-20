import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from 'components/common/Button';
import InputBox from 'components/common/InputBox';

import { emailValidation, passwordValidation } from 'lib/regex';
import useInputs from 'lib/hooks/useInputs';

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
  user-select: none;
`;

const TitleBorder = styled(UnderLine)`
  width: 4.375rem;
  margin-bottom: 0.5rem;
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
  user-select: none;
`;

interface SignUpProps {}
const SignUp: React.FC<SignUpProps> = () => {
  const [email, onChangeEmail] = useInputs('');
  const [password, onChangePassword] = useInputs('');
  const [confirmPassword, onChangeConfirmPassword] = useInputs('');
  const isValidEmail = emailValidation(email);
  const isValidPassword = passwordValidation(password);
  const comparePassword = password === confirmPassword;

  const isDisabled = !isValidEmail || !isValidPassword || !comparePassword;
  return (
    <SignUpWrapper>
      <Title>SignUp</Title>
      <TitleBorder />
      <InputBox
        type="text"
        name="email"
        value={email}
        onChange={onChangeEmail}
        placeholder="이메일"
        autoComplete="off"
        isValid={isValidEmail}
        alertMessage="이메일 형식이 일치하지 않습니다."
      />
      <InputBox
        type="password"
        name="password"
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호(숫자, 대소문자, 특수문자, 8자리 이상)"
        autoComplete="off"
        isValid={isValidPassword}
        alertMessage="비밀번호(숫자, 대소문자, 특수문자, 8자리 이상)"
      />
      <InputBox
        type="password"
        name="confirm_password"
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
        placeholder="비밀번호 확인"
        autoComplete="off"
        isValid={comparePassword}
        alertMessage="비밀번호가 일치하지 않습니다."
      />
      <Button disabled={isDisabled}>회원가입</Button>
      <Content to="/login">
        이미 계정이 있으시다면? <b>로그인</b>
      </Content>
    </SignUpWrapper>
  );
};

export default SignUp;
