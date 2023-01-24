//css
import styles from './Todo.module.css';
import { RiTodoFill } from 'react-icons/ri';

function Todo(props) {
    const { todo, index, deleteTodo } = props;

    return (
        <div
            className={styles.todoItem}
            onDoubleClick={() => deleteTodo(index)}
        >
            <RiTodoFill className={styles.todoIcon} />
            <p className={styles.todoTitle}>{todo}</p>
        </div>
    );
}

export default Todo;
