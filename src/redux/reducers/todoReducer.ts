import {
    LOADING_END,
    LOADING_START,
    FETCH_TODO_SUCCESS,
    ADD_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    TodoDispatchType,
} from "../actions/todoActionTypes";
import { deleteTodoById } from "../actions/todoActionUtils";

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
        case ADD_TODO_SUCCESS:
            const newTodoList = [action.payload, ...state.todoList];
            return { ...state, todoList: newTodoList };
        case DELETE_TODO_SUCCESS:
            const { todoList } = state;
            return { ...state, todoList: deleteTodoById(todoList, action.id) };
        default:
            return state;
    }
};

export default todoReducer;
