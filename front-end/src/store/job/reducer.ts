import produce from 'immer';
import {
  JobState,
  JobTypes,
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE,
  GET_JOB_REQUEST,
  GET_JOB_SUCCESS,
  GET_JOB_FAILURE,
} from './types';

const initialState: JobState = {
  list: [],
  job: {
    item: {
      anywhere: {
        rule: '',
        permission: false,
      },
      anytime: {
        rule: '',
        permission: false,
      },
      location: '',
      description: '',
      companyId: '',
      homepage: '',
      company: '',
      apply: '',
    },
    news: [],
  },
};

const reducer = (state = initialState, action: JobTypes) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALL_JOBS_REQUEST:
        break;
      case GET_ALL_JOBS_FAILURE:
      case GET_ALL_JOBS_SUCCESS:
        draft.list = action.data;
        break;
      case GET_JOB_REQUEST:
      case GET_JOB_FAILURE:
        break;
      case GET_JOB_SUCCESS:
        draft.job = action.data;
        break;
      default:
        break;
    }
  });

export default reducer;
