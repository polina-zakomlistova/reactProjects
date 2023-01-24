function Button(props) {
    const { onClick } = props;
    return <button onClick={onClick}> click me!</button>;
}

export default Button;
