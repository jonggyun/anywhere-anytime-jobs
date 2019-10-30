import { takeEvery, takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  GetJobRequestAction,
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE,
  GET_JOB_REQUEST,
  GET_JOB_SUCCESS,
  GET_JOB_FAILURE,
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

function* getJob(action: GetJobRequestAction) {
  try {
    const {
      data: { item },
    } = yield call(() => axios.get(`/company/${action.companyId}`));
    yield put({
      type: GET_JOB_SUCCESS,
      data: item,
    });
  } catch (error) {
    yield put({
      type: GET_JOB_FAILURE,
    });
  }
}

function* getJobRequest() {
  yield takeLatest(GET_JOB_REQUEST, getJob);
}

export default function* jobSaga() {
  yield all([getAllJobsRequest(), getJobRequest()]);
}
