import { Link, NavLink } from "react-router-dom";

import logo from "../assets/favicon.png";

const Header = () => {
    return (
        <nav className="header">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <span className="name">
                    Quill <span>&</span> Verse
                </span>
            </div>
            <div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/all">All Posts</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
