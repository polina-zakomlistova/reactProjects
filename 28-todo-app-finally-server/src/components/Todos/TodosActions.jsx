//icons
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
//style
import styles from './TodosActions.module.css';
//components
import Button from '../UI/Button';

function TodosActions(props) {
    const { resetTodos, deleteComplitedTodos, complitedTodosExist } = props;
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRefreshLine />
            </Button>
            <Button
                title="Clear Complited Todos"
                onClick={deleteComplitedTodos}
                disabled={!complitedTodosExist}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
}

export default TodosActions;
