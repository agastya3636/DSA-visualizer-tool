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
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/sorting" className="nav-link">
                        Sorting
                    </Link>
                    <Link to="/searching" className="nav-link">
                        Searching
                    </Link>
                    <Link to="/pathfinding" className="nav-link">
                        Pathfinding
                    </Link>
                </div>
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
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
