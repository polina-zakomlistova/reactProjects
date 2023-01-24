import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import styles from './Single.module.css';

const SingleTodo = (props) => {
    const { id } = useParams();
    const { changeTodo, todos } = props;
    const todo = todos.find((el) => el.id === id);

    const [newTodo, setNewTodo] = useState(todo);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!todo) {
            navigate('..', { relative: 'path' });
        }
    }, [todo, navigate]);

    function handleInputChange(name, value) {
        setNewTodo({ ...newTodo, [name]: value });
    }

    return (
        <div className={styles.singleTodo}>
            <label>
                Todo:
                <input
                    value={newTodo.text}
                    onChange={(e) => handleInputChange('text', e.target.value)}
                    type="text"
                />
            </label>
            <select
                name="relevance"
                value={newTodo.relevance}
                onChange={(e) => handleInputChange('relevance', e.target.value)}
            >
                <option value="urgent">Срочная</option>
                <option value="normal">Нормальная</option>
                <option value="nonUrgent">Несрочная</option>
            </select>

            <button onClick={() => changeTodo(newTodo)}>Save</button>

            <Link to=".." relative="path">
                All todos
            </Link>
        </div>
    );
};

export default SingleTodo;
