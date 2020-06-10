import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">SHOP</a>
                <a href="review">ORDER REVIEW</a>
                <a href="inventory">MANAGE INVENTORY</a>
            </nav>
        </div>
    );
};

export default Header;