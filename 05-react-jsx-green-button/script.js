const App = ({ initialButtonText, initialButtonClass }) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText);
    const [buttonClass, setButtonClass] = React.useState(initialButtonClass);

    const onButtonClick = () => {
        setButtonText('Hello from React');
        setButtonClass('green-btn');
    };

    return (
        <div className="app">
            <button onClick={onButtonClick} className={buttonClass}>
                {buttonText}
            </button>
        </div>
    );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialButtonClass="" />);
