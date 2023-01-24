//components
import Todo from './Todo';
//css
import styles from './TodoList.module.css';

function TodoList(props) {
    const { todos, deleteTodo } = props;
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && (
                <h2 className={styles.todoListText}>Todo list is empty</h2>
            )}
            {todos.map((todo, index) => {
                return (
                    <Todo
                        todo={todo}
                        key={index}
                        deleteTodo={deleteTodo}
                        index={index}
                    />
                );
            })}
        </div>
    );
}

export default TodoList;
