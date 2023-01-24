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

    return (
        <div className="App">
            <Counter count={count} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
        </div>
    );
}

export default App;
