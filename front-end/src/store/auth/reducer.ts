import produce from 'immer';
import {
  AuthTypes,
  AuthState,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ME_REQUEST,
} from './types';

const initalState: AuthState = {
  loading: false,
  error: false,
  me: {
    accessToken: '',
    idToken: '',
  },
};

const reducer = (state = initalState, action: AuthTypes) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.loading = true;
        draft.error = false;
        break;
      case LOGIN_SUCCESS:
        draft.loading = false;
        draft.me = { accessToken: action.accessToken, idToken: action.idToken };
        break;
      case LOGIN_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      case ME_REQUEST:
        draft.me = { accessToken: action.accessToken, idToken: action.idToken };
        break;
      default:
        break;
    }
  });

export default reducer;
