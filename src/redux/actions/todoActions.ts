import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import {
    FETCH_TODO_SUCCESS,
    LOADING_END,
    LOADING_START,
    ResponseCode,
    TodoDispatchType
} from "./todoActionTypes";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodoList =
    (userId: number) => async (dispatch: Dispatch<TodoDispatchType>) => {
        const id = toast.loading("Fetching data. Please wait...");

        dispatch({ type: LOADING_START });

        try {
            // Intentional delay for nicer transition
            setTimeout(async () => {
                const response = await axios.get(`${API_BASE_URL}?userId=${userId}`);
                if (response && response.status === ResponseCode.OKAY) {
                    toast.update(id, {
                        render: "Data fetched successfully",
                        type: "success",
                        isLoading: false,
                        autoClose: 2000,
                    });
                    dispatch({
                        type: FETCH_TODO_SUCCESS,
                        payload: response.data,
                    });
                }
            }, 1500);
        } catch (err) {
            toast.update(id, {
                render: "Failed while fetching data. Please refresh again.",
                type: "success",
                isLoading: false,
                autoClose: 2000,
            });
        }

        dispatch({ type: LOADING_END });
    };
