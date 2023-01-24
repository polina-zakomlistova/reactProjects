import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="."
                end
            >
                Todos
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="archiveTodos"
            >
                All Todos
            </NavLink>
        </nav>
    );
};

export default Menu;
