function ResetButton(props) {
    const buttonStyle = { backgroundColor: 'red' };
    const { onClick } = props;
    return (
        <div>
            <button style={buttonStyle} onClick={onClick}>
                Reset
            </button>
        </div>
    );
}

export default ResetButton;
