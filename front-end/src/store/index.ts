import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import jobReducer from './job/reducer';
import jobSaga from './job/sagas';
import { JobState } from './job/types';

import authReducer from './auth/reducer';
import authSaga from './auth/sagas';
import { AuthState } from './auth/types';

const rootReducer = combineReducers({
  job: jobReducer,
  auth: authReducer,
});

export default rootReducer;

export type RootState = {
  job: JobState;
  auth: AuthState;
};

export function* rootSaga() {
  yield all([jobSaga(), authSaga()]);
}
