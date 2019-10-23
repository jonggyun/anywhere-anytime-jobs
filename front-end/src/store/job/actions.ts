import {
  JobType,
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE,
} from './types';

export const getAllJobsRequest = () => ({
  type: GET_ALL_JOBS_REQUEST,
});

export const getAllJobsSuccess = (payload: Array<JobType>) => ({
  type: GET_ALL_JOBS_SUCCESS,
  payload,
});

export const getAllJobsFailure = () => ({
  type: GET_ALL_JOBS_FAILURE,
});
