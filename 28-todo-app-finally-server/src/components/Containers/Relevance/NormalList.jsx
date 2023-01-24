//css
import styles from './RelevanceList.module.css';
//components
import TodoList from '../../Todos/TodoList';

const NormalList = (props) => {
    const { todos, deleteTodos, toggleTodo } = props;
    const urgentTodos = todos.filter((todo) => todo.relevance === 'normal');
    return (
        <div className={styles.normalList}>
            <TodoList
                todos={urgentTodos}
                deleteTodos={deleteTodos}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default NormalList;
