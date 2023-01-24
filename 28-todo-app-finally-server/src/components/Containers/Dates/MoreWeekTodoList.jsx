import moment from 'moment/moment';
import RelevanceTodoList from '../Relevance/RelevanceTodoList';
import style from './DateTodoList.module.css';

const MonthTodoList = (props) => {
    const { todos, deleteTodos, toggleTodo } = props;
    const inWeek = moment().endOf('isoWeek');
    const filteredTodos = todos.filter((todo) => moment(todo.date) > inWeek);

    return (
        <div className={style.moreWeek}>
            <RelevanceTodoList
                todos={filteredTodos}
                deleteTodos={deleteTodos}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default MonthTodoList;
