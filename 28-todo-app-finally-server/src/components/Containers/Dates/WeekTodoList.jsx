import moment from 'moment/moment';
import RelevanceTodoList from '../Relevance/RelevanceTodoList';
import style from './DateTodoList.module.css';

const WeekTodoList = (props) => {
    const { todos, deleteTodos, toggleTodo } = props;
    const today = moment();
    const inWeek = moment().endOf('isoWeek');
    const filteredTodos = todos.filter(
        (todo) => moment(todo.date) > today && moment(todo.date) < inWeek
    );

    return (
        <div className={style.week}>
            <RelevanceTodoList
                todos={filteredTodos}
                deleteTodos={deleteTodos}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default WeekTodoList;
