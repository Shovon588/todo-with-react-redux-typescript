import { TodoType } from "../reducers/todoReducer";

export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";

interface LoadingStart {
    type: typeof LOADING_START;
}

interface LoadingEnd {
    type: typeof LOADING_END;
}

interface FetchTodoSuccess {
    type: typeof FETCH_TODO_SUCCESS;
    payload: TodoType[];
}

export type TodoDispatchType = LoadingStart | LoadingEnd | FetchTodoSuccess;

export enum ResponseCode {
    OKAY = 200,
    CREATED = 201,
}
