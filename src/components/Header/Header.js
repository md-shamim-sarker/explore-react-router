import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <nav>
                <Link to={"/home"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/products"}>Products</Link>
                <Link to={"/friends"}>Friends</Link>
            </nav>
            <h1>This is common header</h1>
        </div>
    );
};

export default Header;