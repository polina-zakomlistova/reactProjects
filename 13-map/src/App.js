//react utils
import { useState } from 'react';
//css
import './App.css';
//components
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const textsArr = [
        'click me!',
        'click me please!',
        'hit me!',
        'press me!',
        'click me again!',
    ];

    return (
        <div className="App">
            <Counter count={count} />
            {textsArr.map((text, index) => {
                return (
                    <Button onClick={incrementCount} text={text} key={index} />
                );
            })}
        </div>
    );
}

export default App;
