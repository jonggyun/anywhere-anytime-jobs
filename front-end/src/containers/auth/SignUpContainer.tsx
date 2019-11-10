import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from 'components/auth/SingUp';
import useInputs from 'lib/hooks/useInputs';
import { RootState } from 'store';

import { signUpReqeust } from 'store/auth/actions';

interface SignUpContainerProps {}
const SignUpContainer: React.FC<SignUpContainerProps> = () => {
  const [email, onChangeEmail] = useInputs('');
  const [password, onChangePassword] = useInputs('');
  const [confirmPassword, onChangeConfirmPassword] = useInputs('');
  const dispatch = useDispatch();
  const { loading, error, email: successEmail } = useSelector(
    (state: RootState) => state.auth,
  );
  const [isSuccess, setIsSuccess] = useState(false);

  const onClickSignUp = async () => {
    try {
      dispatch(signUpReqeust({ email, password }));
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (successEmail) setIsSuccess(true);
  }, [successEmail]);

  return (
    <SignUp
      isSuccess={isSuccess}
      isError={error}
      isLoading={loading}
      email={email}
      onChangeEmail={onChangeEmail}
      password={password}
      onChangePassword={onChangePassword}
      confirmPassword={confirmPassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      onClickSignUp={onClickSignUp}
    />
  );
};

export default SignUpContainer;
