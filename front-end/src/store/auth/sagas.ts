import { takeLatest, all, put, call } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import { history } from 'store';

import {
  LoginRequestAction,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SignUpRequestAction,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from './types';

function* login({ email, password }: LoginRequestAction) {
  try {
    yield Auth.signIn(email, password);
    yield put({
      type: LOGIN_SUCCESS,
      email,
    });
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
    });
  }
}

function* loginRequest() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* signUp({ email, password }: SignUpRequestAction) {
  try {
    yield Auth.signUp({
      username: email,
      password,
      validationData: [],
    });
    yield put({ type: SIGNUP_SUCCESS, email });
  } catch (error) {
    yield put({ type: SIGNUP_FAILURE });
  }
}

function* signUpRequest() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}

function* logOut() {
  try {
    yield Auth.signOut();
    yield put({ type: LOGOUT_SUCCESS });
    yield call(() => history.push('/login'));
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE });
  }
}

function* logOutRequest() {
  yield takeLatest(LOGOUT_REQUEST, logOut);
}

export default function* authSaga() {
  yield all([loginRequest(), signUpRequest(), logOutRequest()]);
}
