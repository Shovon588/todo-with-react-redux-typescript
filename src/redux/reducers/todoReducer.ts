import {
    LOADING_END,
    LOADING_START,
    FETCH_TODO_SUCCESS,
    TodoDispatchType,
} from "../actions/todoActionTypes";

export type TodoType = {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
};

interface DefaultStateI {
    loading: boolean;
    todoList: TodoType[];
}

const defaultState: DefaultStateI = {
    loading: false,
    todoList: [],
};

const todoReducer = (
    state: DefaultStateI = defaultState,
    action: TodoDispatchType
): DefaultStateI => {
    switch (action.type) {
        case LOADING_START:
            return { ...state, loading: true };
        case LOADING_END:
            return { ...state, loading: false };
        case FETCH_TODO_SUCCESS:
            return { ...state, todoList: action.payload };
        default:
            return state;
    }
};

export default todoReducer;
