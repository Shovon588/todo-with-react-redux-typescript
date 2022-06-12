import { TodoType } from "./../../../redux/reducers/todoReducer";

type SearchAbleTodo = "title" | "completed" | "id";

export const handleSearchSortFilter = (
    todoList: TodoType[],
    query: string,
    filterParam: string
) => {
    const searchParam: SearchAbleTodo[] = ["title"];

    const filteredBySearch = todoList.filter((item) => {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) > -1
            );
        });
    });

    const filteredByFilter = filteredBySearch.filter((item) => {
        if (filterParam === "completed") {
            return item.completed === true;
        } else if (filterParam === "todo") {
            return item.completed === false;
        }

        return item;
    });

    return filteredByFilter;
};
