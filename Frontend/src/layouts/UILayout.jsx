import { Outlet, NavLink } from "react-router";

function UILayout() {
    return (
        <div>
            <nav>
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/materials">Materials</NavLink>
                <NavLink to="/play">Play</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default UILayout;