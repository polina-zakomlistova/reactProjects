//packages
import { useState } from 'react';
import moment from 'moment/moment';
//css
import styles from './TodoForm.module.css';
//components
import Button from '../UI/Button';

function TodoForm(props) {
    const { addTodo } = props;

    const [text, setText] = useState('');
    const [relevance, setRelevance] = useState('urgent');
    const [date, setDate] = useState(moment().format('yyyy-MM-DD'));

    const onSubmitHandler = (event) => {
        event.preventDefault();
        addTodo(text, relevance, date);
        setText('');
        setRelevance('urgent');
        setDate(moment().format('yyyy-MM-DD'));
    };

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <div className={styles.test}>
                    <input
                        type="text"
                        placeholder="Enter new todo"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <Button type="submit" title="Submit">
                        Submit
                    </Button>
                </div>

                <div>
                    <select
                        name="relevance"
                        value={relevance}
                        onChange={(e) => {
                            setRelevance(e.target.value);
                        }}
                    >
                        <option value="urgent">Срочная</option>
                        <option value="normal">Нормальная</option>
                        <option value="nonUrgent">Несрочная</option>
                    </select>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    />
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
