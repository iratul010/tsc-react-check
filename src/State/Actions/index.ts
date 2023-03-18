import { ObjectData } from "../../Context/AppProvider";
import { ActionType } from "../ActionTypes";

// AppValuesType
interface FetchingRepositoriesAction {
  type: ActionType.FETCHING_REPOSITORIES;
}

interface FetchingRepositoriesSuccessAction {
  type: ActionType.FETCHING_REPOSITORIES_SUCCESS;
  payload: ObjectData[];
}

interface FetchingRepositoriesErrorAction {
  type: ActionType.FETCHING_REPOSITORIES_ERROR;
}

export type Action = FetchingRepositoriesAction | FetchingRepositoriesSuccessAction | FetchingRepositoriesErrorAction;
