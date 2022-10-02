import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div>
                <h1>This is common header</h1>
                <h3>
                    Md. Shamim Sarker <br />
                    Email: shamimspro@gmail.com
                </h3>
            </div>
            <nav>
                <Link to={"/home"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/products"}>Products</Link>
                <Link to={"/friends"}>Friends</Link>
            </nav>
        </div>
    );
};

export default Header;