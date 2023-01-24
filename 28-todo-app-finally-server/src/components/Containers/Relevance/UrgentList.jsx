//css
import styles from './RelevanceList.module.css';
//components
import TodoList from '../../Todos/TodoList';

const UrgentList = (props) => {
    const { todos, deleteTodos, toggleTodo } = props;
    const urgentTodos = todos.filter((todo) => todo.relevance === 'urgent');
    return (
        <div className={styles.urgentList}>
            <TodoList
                todos={urgentTodos}
                deleteTodos={deleteTodos}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default UrgentList;
