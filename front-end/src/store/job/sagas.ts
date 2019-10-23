import { takeEvery, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE,
} from './types';

function* getJobs() {
  try {
    const {
      data: { jobs },
    } = yield call(() => axios.get('/company'));
    yield put({
      type: GET_ALL_JOBS_SUCCESS,
      data: jobs,
    });
  } catch (error) {
    console.log('error!!', error);
    yield put({
      type: GET_ALL_JOBS_FAILURE,
    });
  }
}

function* getAllJobsRequest() {
  yield takeEvery(GET_ALL_JOBS_REQUEST, getJobs);
}

export default function* jobSaga() {
  yield all([getAllJobsRequest()]);
}
