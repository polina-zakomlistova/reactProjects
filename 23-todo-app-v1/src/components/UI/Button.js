//css
import './Button.css';

function Button(props) {
    const { type } = props;
    return (
        <button className="button" type={type}>
            {props.children}
        </button>
    );
}
export default Button;
