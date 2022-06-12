import { TodoType } from "../reducers/todoReducer";
import { toast } from 'react-toastify'

export const deleteTodoById = (todoList: TodoType[], id: number) => {
    const indexToDelete = todoList.findIndex((item) => item.id === id);
    if (indexToDelete > -1) {
        todoList.splice(indexToDelete, 1);
        toast.error('Item deleted')
    }
    return todoList;
};
