import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../assets/pngegg.png"

const Footer = () => {
    return (
        <footer>


            <Link to={'/'}>
                <img src={Logo} alt={'logo'}/>
            </Link>
        </footer>
    );
};

export default Footer;