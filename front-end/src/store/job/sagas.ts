import { takeEvery, takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';
import uuidv1 from 'uuid/v1';

import { history } from 'store';
import API from 'lib/api';

import {
  GetJobRequestAction,
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE,
  GET_JOB_REQUEST,
  GET_JOB_SUCCESS,
  GET_JOB_FAILURE,
  ADD_JOB_REQUEST,
  ADD_JOB_SUCCESS,
  ADD_JOB_FAILURE,
  AddJobRequestAction,
  UPDATE_JOB_REQUEST,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_FAILURE,
  UpdateJobRequestAction,
} from './types';

function* getJobs() {
  try {
    const {
      data: { jobs },
    } = yield call(() => axios.get(`${API}/company`));
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
    } = yield call(() => axios.get(`${API}/company/${action.companyId}`));

    const {
      data: { news },
    } = yield call(() => axios.get(`${API}/company/news/${item.company}`));

    yield put({
      type: GET_JOB_SUCCESS,
      data: {
        item,
        news,
      },
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

function* addJob(action: AddJobRequestAction) {
  try {
    const { job, logo } = action.payload;
    const companyId = uuidv1();
    let params = { companyId, ...job };

    if (logo) {
      const formData = new FormData();
      const fileName = `${companyId}.${logo.type.split('/')[1]}`;
      formData.append('logo', logo, fileName);
      params = { ...params, logo: fileName };

      yield call(() =>
        axios.post(`${API}/company/${companyId}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      );
    }

    yield call(() => axios.post(`${API}/company`, params));

    yield put({
      type: ADD_JOB_SUCCESS,
    });
    yield call(() => history.push('/'));
  } catch (error) {
    console.log('error', error);
    yield put({
      type: ADD_JOB_FAILURE,
    });
  }
}

function* addJobRequest() {
  yield takeLatest(ADD_JOB_REQUEST, addJob);
}

function* updateJob(action: UpdateJobRequestAction) {
  try {
    yield call(() =>
      axios.put(`${API}/company/${action.payload.companyId}`, action.payload),
    );
    yield put({
      type: UPDATE_JOB_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: UPDATE_JOB_FAILURE,
    });
  }
}

function* updateJobRequest() {
  yield takeLatest(UPDATE_JOB_REQUEST, updateJob);
}

export default function* jobSaga() {
  yield all([
    getAllJobsRequest(),
    getJobRequest(),
    addJobRequest(),
    updateJobRequest(),
  ]);
}
