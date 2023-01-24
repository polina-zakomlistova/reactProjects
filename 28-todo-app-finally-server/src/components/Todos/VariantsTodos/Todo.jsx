//css
import styles from './Todo.module.css';
import { RiTodoFill, RiDeleteBin2Line, RiCheckFill } from 'react-icons/ri';
import moment from 'moment/moment';

function Todo(props) {
    const { todo, deleteTodo, toggleTodo } = props;
    const today = moment().format('yyyy-MM-DD');

    return (
        <div>
            <p className={styles.todoDate}>
                {todo.date === today
                    ? ''
                    : moment(todo.date).format('DD MMMM YYYY')}
            </p>
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
        </div>
    );
}

export default Todo;
