import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ME_REQUEST,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './types';

export const loginRequest = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => ({
  type: LOGIN_REQUEST,
  email,
  password,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const meRequest = ({ email }: { email: string }) => ({
  type: ME_REQUEST,
  email,
});

export const signUpReqeust = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => ({
  type: SIGNUP_REQUEST,
  email,
  password,
});

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signUpFailure = () => ({
  type: SIGNUP_FAILURE,
});

export const logOutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logOutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logOutFailure = () => ({
  type: LOGOUT_FAILURE,
});
