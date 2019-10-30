import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import SignUp from 'components/auth/SingUp';

describe('<SignUp />', () => {
  it('has input and button', () => {
    const history = createMemoryHistory();
    const { getByText, getByPlaceholderText } = render(
      <Router history={history}>
        <SignUp />
      </Router>,
    );
    getByText('SignUp');
    getByPlaceholderText('이메일');
    getByPlaceholderText('비밀번호(숫자, 대소문자, 특수문자, 8자리 이상)');
    getByPlaceholderText('비밀번호 확인');
    getByText('회원가입');
    getByText('이미 계정이 있으시다면?');
    getByText('로그인');
  });
});
