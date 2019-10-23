import produce from 'immer';
import {
  JobState,
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE,
  JobTypes,
} from './types';

const initialState: JobState = {
  list: [],
};

const reducer = (state = initialState, action: JobTypes) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_ALL_JOBS_REQUEST:
        break;
      case GET_ALL_JOBS_SUCCESS:
        draft.list = action.data;
        break;
      case GET_ALL_JOBS_FAILURE:
      default:
        break;
    }
  });

export default reducer;
