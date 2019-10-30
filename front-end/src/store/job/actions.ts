import {
  JobType,
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE,
  GET_JOB_REQUEST,
  GET_JOB_SUCCESS,
  GET_JOB_FAILURE,
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

export const getJobRequest = (companyId: string) => ({
  type: GET_JOB_REQUEST,
  companyId,
});

export const getJobSuccess = (payload: JobType) => ({
  type: GET_JOB_SUCCESS,
  payload,
});

export const getJobFailure = () => ({
  type: GET_JOB_FAILURE,
});
