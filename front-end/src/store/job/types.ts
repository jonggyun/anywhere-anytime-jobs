export interface RuleType {
  rule: string;
  permission: boolean;
}

export interface JobType {
  company: string;
  location?: string;
  homepage?: string;
  description?: string;
  logo?: File | string;
  anywhere?: RuleType;
  anytime?: RuleType;
  companyId?: string;
  apply?: string;
}

export interface NewsType {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
}

export interface JobState {
  list: Array<JobType>;
  job: {
    item: JobType;
    news: Array<NewsType>;
  };
  loading: boolean;
}

export const GET_ALL_JOBS_REQUEST = 'company/GET_ALL_JOBS_REQUEST';
export const GET_ALL_JOBS_SUCCESS = 'company/GET_ALL_JOBS_SUCCESS';
export const GET_ALL_JOBS_FAILURE = 'company/GET_ALL_JOBS_FAILURE';

export const GET_JOB_REQUEST = 'company/GET_JOB_REQUEST';
export const GET_JOB_SUCCESS = 'company/GET_JOB_SUCCESS';
export const GET_JOB_FAILURE = 'company/GET_JOB_FAILURE';

export const ADD_JOB_REQUEST = 'company/ADD_JOB_REQUEST';
export const ADD_JOB_SUCCESS = 'company/ADD_JOB_SUCCESS';
export const ADD_JOB_FAILURE = 'company/ADD_JOB_FAILURE';

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
  loading: boolean;
}

export interface GetJobSuccessAction {
  type: typeof GET_JOB_SUCCESS;
  data: {
    item: JobType;
    news: Array<NewsType>;
  };
  loading: boolean;
}

export interface GetJobFailureAction {
  type: typeof GET_JOB_FAILURE;
  loading: boolean;
}

export interface AddJobRequestAction {
  type: typeof ADD_JOB_REQUEST;
  payload: {
    job: JobType;
    logo: File;
  };
  loading: boolean;
}

export interface AddJobSuccessAction {
  type: typeof ADD_JOB_SUCCESS;
  loading: boolean;
}

export interface AddJobFailureAction {
  type: typeof ADD_JOB_FAILURE;
  loading: boolean;
}

type JobAction =
  | GetJobRequestAction
  | GetJobSuccessAction
  | GetJobFailureAction;

type AddJobAction =
  | AddJobRequestAction
  | AddJobSuccessAction
  | AddJobFailureAction;

export type JobTypes = JobsAction | JobAction | AddJobAction;
