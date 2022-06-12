import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { TodoType } from "../../../redux/reducers/todoReducer";
import SearchSortFilter from "../SearchSortFilter/SearchSortFilter";
import { handleSearchSortFilter } from "../SearchSortFilter/utils";
import "./style.scss";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [query, setQuery] = useState("");
    const [filteredTodo, setFilteredTodo] = useState([] as TodoType[]);
    const { todoList } = useAppSelector((state) => state.todo);

    useEffect(() => {
        setFilteredTodo(handleSearchSortFilter(todoList, query));
    }, [query, todoList]);

    return (
        <div className="list-section">
            <SearchSortFilter {...{ query, setQuery }} />

            {filteredTodo.map((todoObject: any) => {
                return <TodoItem key={todoObject.id} todoObject={todoObject} />;
            })}
        </div>
    );
};

export default TodoList;
