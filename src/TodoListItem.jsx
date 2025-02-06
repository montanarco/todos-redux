import { useDispatch } from "react-redux";
import { deleteTodo, markTodoAsCompleted } from "./thunks";

export default function TodoListItem({ todo }) {
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Complete!</p>}
            {todo.isCompleted 
                ? <button onClick={() => dispatch( deleteTodo(todo.id) )}>Delete Item</button>
                : <button onClick={() => dispatch( markTodoAsCompleted(todo) )}>Mark as Completed</button>
            }
        </div>
    );
}