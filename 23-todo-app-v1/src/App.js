import { useState } from 'react';
//css
import './App.css';
//components
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        setTodos([...todos, text]);
    };
    const deleteTodoHandler = (index) => {
        setTodos(todos.filter((_, idx) => idx !== index));
    };

    return (
        <div className="app">
            <h1 className="app__heading">Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
        </div>
    );
}

export default App;
