//css
import styles from './Todo.module.css';
import { RiTodoFill, RiDeleteBin2Line, RiCheckFill } from 'react-icons/ri';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';

function ArchiveTodo(props) {
    const { todo, deleteTodo, toggleTodo } = props;
    const today = moment().format('yyyy-MM-DD');
    const overdueTodoDate = new Date(today) > new Date(todo.date);

    return (
        <Link to={todo.id}>
            <div
                className={`${styles.todo} ${
                    todo.isComplited ? styles.completedTodo : ''
                }`}
            >
                <RiTodoFill className={styles.todoIcon} />
                <p
                    className={
                        overdueTodoDate
                            ? `${styles.archiveTodoDate} ${styles.overdueTodoDate}`
                            : styles.archiveTodoDate
                    }
                >
                    {moment(todo.date).format('DD.MM.YY')}
                </p>

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
        </Link>
    );
}

export default ArchiveTodo;
