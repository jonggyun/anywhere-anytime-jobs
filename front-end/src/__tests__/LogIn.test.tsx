import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import LogIn from 'components/auth/LogIn';

describe('<LogIn />', () => {
  it('has input and button', () => {
    const history = createMemoryHistory();
    const { getByText, getByPlaceholderText } = render(
      <Router history={history}>
        <LogIn />
      </Router>,
    );
    getByText('LogIn');
    getByPlaceholderText('이메일');
    getByPlaceholderText('비밀번호(숫자, 대소문자, 특수문자, 8자리 이상)');
    getByText('로그인');
    getByText('계정이 없으시다면?');
    getByText('회원가입');
  });
});
