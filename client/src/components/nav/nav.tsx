import { NavLink } from "react-router-dom";

export const Nav: React.FC = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li className="site-nav-logo">
                        Fakelandia Justice Department
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/misdemeanour">Misdemeanours</NavLink>
                    </li>
                    <li>
                        <NavLink to="/confession">Confess To Us</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
