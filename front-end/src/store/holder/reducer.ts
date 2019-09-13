import produce from 'immer';
import {
  HolderState,
  GET_JSON_REQUEST,
  GET_JSON_SUCCESS,
  GET_JSON_FAILURE,
  HolderTypes,
} from './types';

const initialState: HolderState = {
  json: {
    userId: '',
    id: 0,
    title: '',
    body: '',
  },
};

const reducer = (state = initialState, action: HolderTypes): HolderState =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_JSON_REQUEST:
        break;
      case GET_JSON_SUCCESS:
        draft.json = action.data;
        break;
      case GET_JSON_FAILURE:
        break;
    }
  });

export default reducer;
