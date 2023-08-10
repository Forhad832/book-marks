import React from 'react';
import './Header.css'
import logo from '../../images/new2 (1).jpg'
const Header = () => {
    return (
        <nav>
            <div>
                <h2>Knowledge Cafe</h2>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
        </nav>
    );
};

export default Header;