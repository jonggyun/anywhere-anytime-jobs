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
