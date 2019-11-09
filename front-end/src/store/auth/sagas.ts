import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  LoginRequestAction,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './types';

function* login({ email, password }: LoginRequestAction) {
  try {
    const {
      data: { accessToken, idToken },
    } = yield call(axios.post, 'auth/login', {
      username: email,
      password,
    });

    sessionStorage.setItem('anywhere-anytime-jobs:accessToken', accessToken);
    sessionStorage.setItem('anywhere-anytime-jobs:idToken', idToken);
    yield put({
      type: LOGIN_SUCCESS,
      accessToken,
      idToken,
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
