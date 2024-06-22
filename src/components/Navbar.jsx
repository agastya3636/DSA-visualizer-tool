import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

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
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    &#9776;
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" className="nav-link" onClick={toggleMobileMenu}>
                        Home
                    </Link>
                    <Link to="/sorting" className="nav-link" onClick={toggleMobileMenu}>
                        Sorting
                    </Link>
                    <Link to="/searching" className="nav-link" onClick={toggleMobileMenu}>
                        Searching
                    </Link>
                    <Link to="/pathfinding" className="nav-link" onClick={toggleMobileMenu}>
                        Pathfinding
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
