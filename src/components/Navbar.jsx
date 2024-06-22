import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <Link to="/" className="nav-link">
                    <h1>Home</h1>
                </Link>
                <Link to="/sorting" className="nav-link">
                    <h1>Sorting</h1>
                </Link>
                <Link to="/searching" className="nav-link">
                    <h1>Searching</h1>
                </Link>
                <Link to="/pathfinding" className="nav-link">
                    <h1>Pathfinding</h1>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
