import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Login from 'components/auth/LogIn';
import useInputs from 'lib/hooks/useInputs';

import { loginRequest } from 'store/auth/actions';
import { RootState } from 'store';

interface LoginContainerProps {}
const LoginContainer: React.FC<LoginContainerProps> = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { error, loading, isLoggedIn } = useSelector(
    (state: RootState) => state.auth,
  );
  const [email, onChangeEmail] = useInputs('');
  const [password, onChangePassword] = useInputs('');

  const onClickLogin = async () => {
    await dispatch(loginRequest({ email, password }));
  };

  useEffect(() => {
    if (isLoggedIn) push('/');
  }, [isLoggedIn]);

  return (
    <Login
      loading={loading}
      email={email}
      onChangeEmail={onChangeEmail}
      password={password}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      isError={error}
    />
  );
};

export default LoginContainer;
