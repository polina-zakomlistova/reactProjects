//css
import styles from './RelevanceList.module.css';
//components
import TodoList from '../../Todos/TodoList';

const NonUrgentList = (props) => {
    const { todos, deleteTodos, toggleTodo } = props;
    const urgentTodos = todos.filter((todo) => todo.relevance === 'nonUrgent');
    return (
        <div className={styles.nonUrgentList}>
            <TodoList
                todos={urgentTodos}
                deleteTodos={deleteTodos}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default NonUrgentList;
