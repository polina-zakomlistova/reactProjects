import './style.css';

function Person(props) {
    const { firstName, lastName, img, email } = props;
    return (
        <div className="cards__item">
            <img src={img} alt="foto"></img>
            <h1>{`${firstName} ${lastName}`}</h1>
            <h3>{email}</h3>
        </div>
    );
}

export default Person;
