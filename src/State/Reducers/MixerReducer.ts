import { ObjectData } from "../../Context/AppProvider";
import { Action } from "../Actions";
import { ActionType } from "../ActionTypes";

export interface InitialState {
  loading: boolean;
  error: boolean;
  data: ObjectData[];
}

export const initialState: InitialState = {
  loading: false,
  error: false,
  data: [],
};
export const mixerReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.FETCHING_REPOSITORIES:
      return { loading: true, error: false, data: [] };
    case ActionType.FETCHING_REPOSITORIES_SUCCESS:
      return { loading: false, error: false, data: action.payload };
    case ActionType.FETCHING_REPOSITORIES_ERROR:
      return { loading: false, error: true, data: [] };
    default:
      return state;
  }
};
