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
}

export const GET_ALL_JOBS_REQUEST = 'company/GET_ALL_JOBS_REQUEST';
export const GET_ALL_JOBS_SUCCESS = 'company/GET_ALL_JOBS_SUCCESS';
export const GET_ALL_JOBS_FAILURE = 'company/GET_ALL_JOBS_FAILURE';

interface JobAction {
  type:
    | typeof GET_ALL_JOBS_REQUEST
    | typeof GET_ALL_JOBS_SUCCESS
    | typeof GET_ALL_JOBS_FAILURE;
  data: Array<JobType>;
}

export type JobTypes = JobAction;
