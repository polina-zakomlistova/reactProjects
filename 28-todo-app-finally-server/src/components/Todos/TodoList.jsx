//components
import Todo from './VariantsTodos/Todo';
import ArchiveTodo from './VariantsTodos/ArhiveTodo';
//css
import styles from './TodoList.module.css';

function TodoList(props) {
    const { todos, deleteTodos, toggleTodo, variantTodo = 'Todo' } = props;

    return (
        <div className={styles.todoListContainer}>
            {todos.map((todo) => {
                if (variantTodo === 'ArchiveTodo') {
                    return (
                        <ArchiveTodo
                            todo={todo}
                            key={todo.id}
                            deleteTodo={deleteTodos}
                            toggleTodo={toggleTodo}
                        />
                    );
                } else {
                    return (
                        <Todo
                            todo={todo}
                            key={todo.id}
                            deleteTodo={deleteTodos}
                            toggleTodo={toggleTodo}
                        />
                    );
                }
            })}
        </div>
    );
}
export default TodoList;
