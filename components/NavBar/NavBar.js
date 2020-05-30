import React from 'react';
import "./NavBar.css"
const NavBar = () => {
    return (
        <div className="nav-bar-container">
            <div className="nav-bar-links">
                <a href="#" className="nav-bar-link">Projects</a>
                <a href="#" className="nav-bar-link">Finance</a>
                <a href="#" className="nav-bar-link">Notes</a>
            </div>
        </div>
    );
}

export default NavBar;