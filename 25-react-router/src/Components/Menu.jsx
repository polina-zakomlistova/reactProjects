import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="."
                end
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="contacts"
            >
                Contacts
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="about"
            >
                About
            </NavLink>
        </nav>
    );
};

export default Menu;
