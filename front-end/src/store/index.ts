import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import holderReducer from './holder/reducer';
import holderSaga from './holder/sagas';

import { HolderState } from './holder/types';

const rootReducer = combineReducers({
  holderReducer,
});

export default rootReducer;

export type RootState = HolderState;

export function* rootSaga() {
  yield all([holderSaga()]);
}
