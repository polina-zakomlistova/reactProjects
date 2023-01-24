import TodoList from './Todos/TodoList';
import TodosActions from './Todos/TodosActions';
import styles from './ArchiveTodos.module.css';

const ArchiveTodos = (props) => {
    const {
        todos,
        deleteTodo,
        toggleTodo,
        resetTodos,
        deleteComplitedTodos,
        changeTodo,
    } = props;

    const complitedTodosCount = todos.filter((todo) => todo.isComplited).length;

    const sortTodos = todos.sort(
        (prev, next) => new Date(prev.date) - new Date(next.date)
    );
    return (
        <div className={styles.archiveTodos}>
            {sortTodos.length > 0 && (
                <TodosActions
                    resetTodos={resetTodos}
                    deleteComplitedTodos={deleteComplitedTodos}
                    complitedTodosExist={!!complitedTodosCount}
                />
            )}
            <TodoList
                todos={sortTodos}
                deleteTodos={deleteTodo}
                toggleTodo={toggleTodo}
                variantTodo="ArchiveTodo"
                changeTodo={changeTodo}
            />
        </div>
    );
};

export default ArchiveTodos;
