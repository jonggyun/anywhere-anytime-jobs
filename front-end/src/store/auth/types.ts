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

export const SIGNUP_REQUEST = 'auth/SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE';

export const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

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

export interface SignUpRequestAction {
  type: typeof SIGNUP_REQUEST;
  loading: boolean;
  email: string;
  password: string;
}

export interface SignUpSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  loading: boolean;
  email: string;
}

export interface SignUpFailureAction {
  type: typeof SIGNUP_FAILURE;
  loading: boolean;
}

export interface LogOutRequestAction {
  type: typeof LOGOUT_REQUEST;
}

export interface LogOutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

export interface LogOutFailureAction {
  type: typeof LOGOUT_FAILURE;
}

type LoginAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;

type SignUpAction =
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailureAction;

type LogOutAction =
  | LogOutRequestAction
  | LogOutSuccessAction
  | LogOutFailureAction;

export type AuthTypes =
  | LoginAction
  | MeRequestAction
  | SignUpAction
  | LogOutAction;
