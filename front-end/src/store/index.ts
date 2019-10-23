import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import jobReducer from './job/reducer';
import jobSaga from './job/sagas';
import { JobState } from './job/types';

const rootReducer = combineReducers({
  job: jobReducer,
});

export default rootReducer;

export type RootState = {
  job: JobState;
};

export function* rootSaga() {
  yield all([jobSaga()]);
}
