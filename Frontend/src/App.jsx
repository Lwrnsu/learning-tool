import { Routes, Route } from 'react-router';
import RouteNotFound from './pages/RouteNotFound';
import UILayout from './layouts/UILayout';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <div>
            <Routes>
                <Route path='*' element={<RouteNotFound />}/>
                <Route element={<UILayout />}>
                    <Route path='/' element={<Dashboard />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;