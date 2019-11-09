import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ME_REQUEST,
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

export const loginSuccess = ({
  accessToken,
  idToken,
}: {
  accessToken: string;
  idToken: string;
}) => ({
  type: LOGIN_SUCCESS,
  accessToken,
  idToken,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const meRequest = ({
  accessToken,
  idToken,
}: {
  accessToken: string;
  idToken: string;
}) => ({
  type: ME_REQUEST,
  accessToken,
  idToken,
});
