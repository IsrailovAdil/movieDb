import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="p-3 bg-dark text-white mb-5">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/public" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <p className="fs-1">MovieDB</p>
                    </a>

                    <ul className="nav col-12 col-lg-auto  mb-2 justify-content-end mb-md-0">
                        <li><Link to={'/'} className="nav-link px-2 text-secondary">Home</Link></li>
                        <li><Link to={'/search'} className="nav-link px-2 text-white">Search</Link></li>
                        <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                    </ul>

                </div>
            </div>
        </header>

    );
};

export default Header;