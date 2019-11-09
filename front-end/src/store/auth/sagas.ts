import { takeLatest, all, put } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';

import {
  LoginRequestAction,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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

export default function* authSaga() {
  yield all([loginRequest()]);
}
