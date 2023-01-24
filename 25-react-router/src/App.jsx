import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import NotFound from './Components/NotFound';
import MainLayouts from './layouts/MainLayouts';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayouts />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
