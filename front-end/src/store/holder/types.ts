export interface JsonType {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export interface HolderState {
  json: JsonType;
}

export const GET_JSON_REQUEST = 'holder/GET_JSON_REQUEST';
export const GET_JSON_SUCCESS = 'holder/GET_JSON_SUCCESS';
export const GET_JSON_FAILURE = 'holder/GET_JSON_FAILURE';

interface JsonAction {
  type:
    | typeof GET_JSON_REQUEST
    | typeof GET_JSON_SUCCESS
    | typeof GET_JSON_FAILURE;
  data: JsonType;
}

export type HolderTypes = JsonAction;
