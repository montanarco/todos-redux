import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { useSelector } from "react-redux";

export default function TodoList() {

    const todosAreLoading = useSelector(state => !state.loading.value.completed);
    const todos = useSelector( state => state.todos.value );

    return(
        <div>
            <h1>My Todos</h1>
            <NewTodoForm />
            { todosAreLoading 
                ? <p>Loading ...</p> 
                : (
                    <>
                    <h3 className="todo-category">Completed:</h3>
                        {todos.filter( t => t.isCompleted).map((todo)=>(
                            <TodoListItem todo={todo} key={todo.id} />
                        ))}
                        <h3 className="todo-category">Incompleted:</h3>
                        {todos.filter( t => !t.isCompleted).map((todo)=>(
                            <TodoListItem todo={todo} key={todo.id} />
                        ))}
                    </>
                )}
            
        </div>
    );
}
