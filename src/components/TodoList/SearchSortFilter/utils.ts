import { TodoType } from "./../../../redux/reducers/todoReducer";

type SearchAbleTodo = "title" | "completed" | "id";

export const handleSearchSortFilter = (todoList: TodoType[], query: string) => {
    const searchParam: SearchAbleTodo[] = ["title"];

    const searchFiltered = todoList.filter((item) => {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) > -1
            );
        });
    });

    return searchFiltered;
};
