import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { UnderLine, responsiveSize } from 'styles/common';
import palette from 'styles/palette';

import Button from 'components/common/Button';
import InputBox from 'components/common/InputBox';

import { emailValidation, passwordValidation } from 'lib/regex';

const LogInWrapper = styled.section`
  padding: 1.25rem;
  width: 23.125rem;
  background-color: #fff;
  border: 1px solid ${palette.gray2};

  @media screen and (max-width: ${responsiveSize.desktop.sm}) {
    width: 95%;
  }
`;

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 900;
  padding: 0;
  margin: 0;
  user-select: none;
`;

const TitleBorder = styled(UnderLine)`
  width: 3.125rem;
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
const ButtonWrapper = styled.div`
  position: relative;
`;

const AlertMessage = styled.span`
  position: absolute;
  font-size: 0.625rem;
  color: #e03131;
`;

interface LogInProps {
  loading: boolean;
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  isError: boolean;
}
const LogIn: React.FC<LogInProps> = ({
  loading,
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onClickLogin,
  isError,
}) => {
  const isValidEmail = emailValidation(email);
  const isValidPassword = passwordValidation(password);

  const isDisabled = !isValidEmail || !isValidPassword;
  return (
    <LogInWrapper>
      <Title>LogIn</Title>
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
      <ButtonWrapper>
        {isError && (
          <AlertMessage>
            가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.
          </AlertMessage>
        )}
        <Button
          disabled={isDisabled}
          isLoading={loading}
          onClick={onClickLogin}
        >
          로그인
        </Button>
      </ButtonWrapper>
      <Content to="/signup">
        계정이 없으시다면? <b>회원가입</b>
      </Content>
    </LogInWrapper>
  );
};

export default LogIn;
