export interface AuthState {
  loading: boolean;
  error: boolean;
  isLoggedIn: boolean;
  email: string;
}

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

export const ME_REQUEST = 'auth/ME_REQUEST';

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  loading: boolean;
  email: string;
  password: string;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  loading: boolean;
  isLoggedIn: boolean;
  email: string;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  loading: boolean;
  error: boolean;
}

export interface MeRequestAction {
  type: typeof ME_REQUEST;
  email: string;
}

type LoginAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;

export type AuthTypes = LoginAction | MeRequestAction;
