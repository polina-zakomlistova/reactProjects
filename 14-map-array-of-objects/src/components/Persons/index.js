//data
import persons from '../../data/persons';
//components
import Person from '../Person';
//styles
import './style.css';

function Persons() {
    return (
        <div className="cards__list">
            {persons.map((person) => {
                return <Person {...person} key={person.id} />;
            })}
        </div>
    );
}

export default Persons;
