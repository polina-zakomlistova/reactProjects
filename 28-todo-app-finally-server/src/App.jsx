// api
import { api } from './modules/api.js';
// Константы - методы & операции
import { POST, DELETE, PUT, ADD, UPDATE, REMOVE } from './modules/constants.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//packages
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
//components
import ActualTodos from './components/ActualTodos';
import ArchiveTodos from './components/ArchiveTodos';
import NotFound from './components/NotFound';
import MainLayouts from './layouts/MainLayouts';
import SingleTodo from './components/SingleTodo';

import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function generateTodos() {
            const newTodos = await api();
            setTodos(newTodos);
            console.log(newTodos);
        }
        generateTodos();
    }, []);

    const addTodoHandler = (text, relevance, date) => {
        const newTodo = {
            text,
            relevance,
            date,
            isComplited: false,
            id: uuidv4(),
        };

        setTodos([...todos, newTodo]);
        handleClick(newTodo.id, ADD, newTodo);
    };
    const changeTodoHandler = (newTodo) => {
        const updatedTodo = todos.map((item) => {
            if (item.id === newTodo.id) {
                return newTodo; // return new item
            }
            return item; // else return unmodified item
        });
        setTodos(updatedTodo);
        handleClick(newTodo.id, UPDATE, newTodo);
    };
    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        handleClick(id, DELETE);
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

    // Обновляем | удаляем задачу
    const handleClick = async (id, action, todo) => {
        switch (action) {
            case ADD: {
                await api(POST, { body: todo });
                break;
            }
            case UPDATE: {
                await api(PUT, { id, body: todo });
                break;
            }
            case REMOVE: {
                await api(DELETE, { id });
            }
            default:
                return;
        }
    };

    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<MainLayouts />}>
                        <Route
                            index
                            element={
                                <ActualTodos
                                    todos={todos}
                                    addTodo={addTodoHandler}
                                    deleteTodo={deleteTodoHandler}
                                    toggleTodo={toggleTodoHandler}
                                    resetTodos={resetTodosHandler}
                                    deleteComplited={
                                        deleteComplitedTodosHandler
                                    }
                                />
                            }
                        />
                        <Route
                            path="archiveTodos"
                            element={
                                <ArchiveTodos
                                    todos={todos}
                                    deleteTodo={deleteTodoHandler}
                                    toggleTodo={toggleTodoHandler}
                                    resetTodos={resetTodosHandler}
                                    changeTodo={changeTodoHandler}
                                    deleteComplited={
                                        deleteComplitedTodosHandler
                                    }
                                />
                            }
                        />
                        <Route
                            path="archiveTodos/:id"
                            element={
                                <SingleTodo
                                    changeTodo={changeTodoHandler}
                                    todos={todos}
                                />
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
