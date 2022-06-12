import { AiOutlineDelete } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

interface TodoObjInterface {
    id: number;
    title: string;
    completed: boolean;
}

interface Props {
    todoObject: TodoObjInterface;
}

const TodoItem: React.FC<Props> = ({ todoObject }) => {
    const { id, title, completed } = todoObject;

    return (
        <div className="todo-list">
            <input type="text" readOnly className="input-field" value={title} />

            <span
                data-tip={`${
                    id > 200
                        ? "The mock api does not support update operation to newly created item. Please try with the default ones."
                        : `Mark "${title}" as ${completed ? 'Todo' : 'Done'}`
                }`}
                data-for="toggleTip"
            >
                <input
                    type="checkbox"
                    className="checkbox"
                    defaultChecked={completed}
                    disabled={id > 200}
                />
            </span>

            <AiOutlineDelete
                className="remove-icon"
                data-tip={`Delete "${title}" from the list`}
                data-for="deleteTip"
            />

            <ReactTooltip id="deleteTip" place="top" effect="solid" />
            <ReactTooltip id="toggleTip" place="top" effect="solid" />
        </div>
    );
};

export default TodoItem;
