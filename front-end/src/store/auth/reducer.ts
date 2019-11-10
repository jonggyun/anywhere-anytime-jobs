import produce from 'immer';
import {
  AuthTypes,
  AuthState,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ME_REQUEST,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './types';

const initalState: AuthState = {
  loading: false,
  error: false,
  isLoggedIn: false,
  email: '',
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
        draft.isLoggedIn = true;
        draft.email = action.email;
        break;
      case LOGIN_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      case ME_REQUEST:
        draft.isLoggedIn = true;
        draft.email = action.email;
        break;
      case SIGNUP_REQUEST:
        draft.loading = true;
        draft.error = false;
        break;
      case SIGNUP_SUCCESS:
        draft.loading = false;
        draft.email = action.email;
        break;
      case SIGNUP_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      case LOGOUT_REQUEST:
        break;
      case LOGOUT_SUCCESS:
        draft.isLoggedIn = false;
        break;
      case LOGOUT_FAILURE:
        break;
      default:
        break;
    }
  });

export default reducer;
