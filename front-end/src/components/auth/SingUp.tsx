import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from 'components/common/Button';
import InputBox from 'components/common/InputBox';

import { emailValidation, passwordValidation } from 'lib/regex';

import { UnderLine } from 'styles/common';
import palette from 'styles/palette';

const SignUpWrapper = styled.section`
  padding: 1.25rem;
  width: 23.125rem;
  background-color: #fff;
  border: 1px solid ${palette.gray2};
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

const ButtonWrapper = styled.div`
  position: relative;
`;

const AlertMessage = styled.span`
  position: absolute;
  font-size: 0.625rem;
  color: #e03131;
`;

const Confirm = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
`;

interface SignUpProps {
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
  email: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  confirmPassword: string;
  onChangeConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: () => void;
}
const SignUp: React.FC<SignUpProps> = ({
  isSuccess,
  isError,
  isLoading,
  email,
  onChangeEmail,
  password,
  onChangePassword,
  confirmPassword,
  onChangeConfirmPassword,
  onClickSignUp,
}) => {
  const isValidEmail = emailValidation(email);
  const isValidPassword = passwordValidation(password);
  const comparePassword = password === confirmPassword;

  const isDisabled = !isValidEmail || !isValidPassword || !comparePassword;
  return (
    <SignUpWrapper>
      <Title>SignUp</Title>
      <TitleBorder />
      {isSuccess && (
        <Confirm>
          <span>인증메일이 발송되었습니다.</span>
          <span>인증 후 로그인 해주시기바랍니다.</span>
        </Confirm>
      )}
      {!isSuccess && (
        <React.Fragment>
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
          <ButtonWrapper>
            {isError && <AlertMessage>이미 등록된 사용자입니다.</AlertMessage>}
            <Button
              disabled={isDisabled}
              onClick={onClickSignUp}
              isLoading={isLoading}
            >
              회원가입
            </Button>
          </ButtonWrapper>
          <Content to="/login">
            이미 계정이 있으시다면? <b>로그인</b>
          </Content>
        </React.Fragment>
      )}
    </SignUpWrapper>
  );
};

export default SignUp;
