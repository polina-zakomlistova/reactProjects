//css
import styles from './Todo.module.css';
import { RiTodoFill, RiDeleteBin2Line, RiCheckFill } from 'react-icons/ri';

function Todo(props) {
    const { todo, deleteTodo, toggleTodo } = props;

    return (
        <div
            className={`${styles.todo} ${
                todo.isComplited ? styles.completedTodo : ''
            }`}
        >
            <RiTodoFill className={styles.todoIcon} />
            <p className={styles.todoTitle}>{todo.text}</p>
            <RiDeleteBin2Line
                className={styles.deleteIcon}
                onClick={() => deleteTodo(todo.id)}
            />
            <RiCheckFill
                className={styles.checkIcon}
                onClick={() => toggleTodo(todo.id)}
            />
        </div>
    );
}

export default Todo;
