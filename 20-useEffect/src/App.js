import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
    const [todo, setTodo] = useState(null);
    console.log('rendered');
    console.log(todo);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) => setTodo(json));
    }, []);
    return (
        <div className="App">
            <h1>{todo && todo.title}</h1>
        </div>
    );
}

export default App;
