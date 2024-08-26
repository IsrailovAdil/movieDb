import React from 'react';
import {Link} from "react-router-dom";
import './style.scss'
import logo from '../assets/pngegg (1).png'

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-content">
                    <a href="/public" className="header-brand">
                        <Link to={'/'}>
                            <img src={logo} alt={'logo'}/>

                        </Link>
                        <p className="header-title">MovieDB</p>
                    </a>

                    <ul className="header-nav">
                        <li><Link to={'/'} className="nav-item text-secondary">Home</Link></li>
                        <li><Link to={'/search'} className="nav-item text-white">Search</Link></li>
                        <li><a href="#" className="nav-item text-white">Pricing</a></li>
                        <li><a href="#" className="nav-item text-white">FAQs</a></li>
                        <li><a href="#" className="nav-item text-white">About</a></li>
                    </ul>
                </div>
            </div>
        </header>

    );
};

export default Header;