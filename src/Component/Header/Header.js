import React from 'react';
import './Header.css';
import logo from '../../image/logo.png';

const Header = () => {
    return (
        <div>
             <div>
            <div className="header">
         <img src={logo} alt=""/>
        <nav>
        <a href="/">Shop</a>        
        <a href="/createProduct">Create Product</a>
        <a href="/allProductControl" className="bg bg-warning">Admin</a>
        </nav>
    </div>
        </div>
        </div>
    );
};

export default Header;