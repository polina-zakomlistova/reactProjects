import { Outlet } from 'react-router-dom';
import Menu from '../Components/Menu';

const MainLayouts = () => {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    );
};

export default MainLayouts;
