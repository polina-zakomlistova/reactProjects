import moment from 'moment/moment';
import RelevanceTodoList from '../Relevance/RelevanceTodoList';

import style from './DateTodoList.module.css';

const TodayTodoList = (props) => {
    const { todos, deleteTodos, toggleTodo } = props;
    const today = moment().format('yyyy-MM-DD');
    const filteredTodos = todos.filter((todo) => todo.date === today);

    return (
        <div className={style.today}>
            <RelevanceTodoList
                todos={filteredTodos}
                deleteTodos={deleteTodos}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default TodayTodoList;
