import { takeEvery, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { GET_JSON_REQUEST, GET_JSON_SUCCESS, GET_JSON_FAILURE } from './types';

function* getJson() {
  try {
    const { data } = yield call(() =>
      axios.get('https://jsonplaceholder.typicode.com/posts/1'),
    );

    yield put({
      type: GET_JSON_SUCCESS,
      data,
    });
  } catch (error) {
    console.log('error!!', error);
    yield put({
      type: GET_JSON_FAILURE,
    });
  }
}

function* getJsonRequest() {
  yield takeEvery(GET_JSON_REQUEST, getJson);
}

export default function* holderSaga() {
  yield all([getJsonRequest()]);
}
