//components
import Todo from './Todo';
//css
import styles from './TodoList.module.css';

function TodoList(props) {
    const { todos, deleteTodos, toggleTodo } = props;
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && (
                <h2 className={styles.todoListText}>Todo list is empty</h2>
            )}
            {todos.map((todo) => {
                return (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        deleteTodo={deleteTodos}
                        toggleTodo={toggleTodo}
                    />
                );
            })}
        </div>
    );
}

export default TodoList;
