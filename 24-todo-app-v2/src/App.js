//packeges
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//css
import './App.css';
//components
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import TodosActions from './components/Todos/TodosActions';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        const newTodo = {
            text,
            isComplited: false,
            id: uuidv4(),
        };

        setTodos([...todos, newTodo]);
    };
    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodoHandler = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? { ...todo, isComplited: !todo.isComplited }
                    : { ...todo };
            })
        );
    };

    const resetTodosHandler = () => {
        setTodos([]);
    };

    const deleteComplitedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isComplited));
    };

    const complitedTodosCount = todos.filter((todo) => todo.isComplited).length;

    return (
        <div className="app">
            <h1 className="app__heading">Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            {todos.length > 0 && (
                <TodosActions
                    resetTodos={resetTodosHandler}
                    deleteComplitedTodos={deleteComplitedTodosHandler}
                    complitedTodosExist={!!complitedTodosCount}
                />
            )}
            <TodoList
                todos={todos}
                deleteTodos={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}
            />
            {!!complitedTodosCount && (
                <h2 className="app__title">
                    {`Complited ${complitedTodosCount} ${
                        complitedTodosCount > 1 ? 'todos' : 'todo'
                    }`}
                </h2>
            )}
        </div>
    );
}

export default App;
