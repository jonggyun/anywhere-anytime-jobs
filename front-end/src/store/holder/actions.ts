import {
  JsonType,
  GET_JSON_SUCCESS,
  GET_JSON_REQUEST,
  GET_JSON_FAILURE,
} from './types';

export const getJsonRequest = () => ({
  type: GET_JSON_REQUEST,
});

export const getJsonSuccess = (payload: JsonType) => ({
  type: GET_JSON_SUCCESS,
  payload,
});

export const getJsonFailure = () => ({
  type: GET_JSON_FAILURE,
});
