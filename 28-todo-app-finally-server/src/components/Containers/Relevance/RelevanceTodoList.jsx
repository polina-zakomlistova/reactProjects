import UrgentList from './UrgentList';
import NormalList from './NormalList';
import NonUrgentList from './NonUrgentList';
//css
import styles from './RelevanceList.module.css';

const RelevanceTodoList = (props) => {
    const { todos, deleteTodos, toggleTodo } = props;

    const urgentTodosCount = todos.filter(
        (todo) => todo.relevance === 'urgent'
    ).length;
    const normalTodosCount = todos.filter(
        (todo) => todo.relevance === 'normal'
    ).length;
    const nonUrgentTodosCount = todos.filter(
        (todo) => todo.relevance === 'nonUrgent'
    ).length;

    return (
        <div className={styles.relevanceLists}>
            {urgentTodosCount > 0 && (
                <UrgentList
                    todos={todos}
                    deleteTodos={deleteTodos}
                    toggleTodo={toggleTodo}
                />
            )}
            {normalTodosCount > 0 && (
                <NormalList
                    todos={todos}
                    deleteTodos={deleteTodos}
                    toggleTodo={toggleTodo}
                />
            )}
            {nonUrgentTodosCount > 0 && (
                <NonUrgentList
                    todos={todos}
                    deleteTodos={deleteTodos}
                    toggleTodo={toggleTodo}
                />
            )}
        </div>
    );
};

export default RelevanceTodoList;
