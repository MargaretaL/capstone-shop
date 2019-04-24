/**
 * Created by lilit on 2019-04-19.
 */

import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {
    return (
    <nav className="navbar navbar-expand bg-dark fixed-bottom">
        <ul className="navbar-nav mr-auto text-light d-flex justify-content-around m-auto">
            <li className="nav-item active">
                <Link className="nav-link text-light" to="/">HOME<span
                    className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-light" to="/contact">CONTACT<span
                    className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-light" to="/about">ABOUT<span
                    className="sr-only">(current)</span></Link>
            </li>
        </ul>

    </nav>
    )
};

export default Footer;