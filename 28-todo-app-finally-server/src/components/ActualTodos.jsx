//packages
import { useState } from 'react';

//css
import style from './ActualTodos.module.css';
//components
import TodoForm from './Todos/TodoForm';
import TodosActions from './Todos/TodosActions';
import TodayTodoList from './Containers/Dates/TodayTodoList';
import WeekTodoList from './Containers/Dates/WeekTodoList';
import MoreWeekTodoList from './Containers/Dates/MoreWeekTodoList';

function ActualTodos(props) {
    const {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        resetTodos,
        deleteComplitedTodos,
    } = props;

    const [datesFilter, setDatesFilter] = useState('today');

    const complitedTodosCount = todos.filter((todo) => todo.isComplited).length;

    return (
        <div className={style.app}>
            <h1 className={style.appHeading}>Todo App</h1>
            <TodoForm addTodo={addTodo} />
            {todos.length > 0 && (
                <TodosActions
                    resetTodos={resetTodos}
                    deleteComplitedTodos={deleteComplitedTodos}
                    complitedTodosExist={!!complitedTodosCount}
                />
            )}
            <div className={style.radioForm}>
                <div className={style.radioItem}>
                    <input
                        id="radio-1"
                        type="radio"
                        name="radio"
                        value="today"
                        checked={datesFilter === 'today' ? true : false}
                        onChange={(e) => {
                            setDatesFilter('today');
                            console.log(e);
                        }}
                    />
                    <label htmlFor="radio-1">Today</label>
                </div>
                <div className={style.radioItem}>
                    <input
                        id="radio-2"
                        type="radio"
                        name="radio"
                        value="week"
                        checked={datesFilter === 'week' ? true : false}
                        onChange={(e) => {
                            setDatesFilter('week');
                        }}
                    />
                    <label htmlFor="radio-2">Week</label>
                </div>
                <div className={style.radioIitem}>
                    <input
                        id="radio-3"
                        type="radio"
                        name="radio"
                        value="moreWeek"
                        checked={datesFilter === 'moreWeek' ? true : false}
                        onChange={(e) => {
                            setDatesFilter('moreWeek');
                        }}
                    />
                    <label htmlFor="radio-3">More week</label>
                </div>
            </div>

            <div>
                {datesFilter === 'today' && (
                    <TodayTodoList
                        todos={todos}
                        deleteTodos={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                )}
                {datesFilter === 'week' && (
                    <WeekTodoList
                        todos={todos}
                        deleteTodos={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                )}
                {datesFilter === 'moreWeek' && (
                    <MoreWeekTodoList
                        todos={todos}
                        deleteTodos={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                )}
            </div>
        </div>
    );
}

export default ActualTodos;
