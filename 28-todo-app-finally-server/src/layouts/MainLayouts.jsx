import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

const MainLayouts = () => {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    );
};

export default MainLayouts;
