interface RuleType {
  rule: string;
  permission: boolean;
}

export interface JobType {
  anywhere: RuleType;
  anytime: RuleType;
  location: string;
  description: string;
  companyId: string;
  homepage: string;
  company: string;
  apply: string;
}

export interface JobState {
  list: Array<JobType>;
  job: JobType;
}

export const GET_ALL_JOBS_REQUEST = 'company/GET_ALL_JOBS_REQUEST';
export const GET_ALL_JOBS_SUCCESS = 'company/GET_ALL_JOBS_SUCCESS';
export const GET_ALL_JOBS_FAILURE = 'company/GET_ALL_JOBS_FAILURE';

export const GET_JOB_REQUEST = 'company/GET_JOB_REQUEST';
export const GET_JOB_SUCCESS = 'company/GET_JOB_SUCCESS';
export const GET_JOB_FAILURE = 'company/GET_JOB_FAILURE';

interface JobsAction {
  type:
    | typeof GET_ALL_JOBS_REQUEST
    | typeof GET_ALL_JOBS_SUCCESS
    | typeof GET_ALL_JOBS_FAILURE;
  data: Array<JobType>;
}

export interface GetJobRequestAction {
  type: typeof GET_JOB_REQUEST;
  companyId: string;
}

export interface GetJobSuccessAction {
  type: typeof GET_JOB_SUCCESS;
  data: JobType;
}

export interface GetJobFailureAction {
  type: typeof GET_JOB_FAILURE;
}

type JobAction =
  | GetJobRequestAction
  | GetJobSuccessAction
  | GetJobFailureAction;

export type JobTypes = JobsAction | JobAction;
