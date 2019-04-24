/**
 * Created by lilit on 2019-04-19.
 */

import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {
    return (
        /*The footer bar should always be at the bottom of the page rubric72*/
    <nav className="navbar navbar-expand bg-dark fixed-bottom">
        <ul className="navbar-nav mr-auto text-light d-flex justify-content-around m-auto">
            {/*User shall see a link to the home page rubric73
             Clicking on the home page link should take the user to the home
             page
             rubric76
            */}
            <li className="nav-item active">
                <Link className="nav-link text-light" to="/">HOME<span
                    className="sr-only">(current)</span></Link>
            </li>
            {/*User shall see a link to the contact page rubric75
             Clicking on the contact page link should take the user to the
             contact page
             rubric78
            */}
            <li className="nav-item active">
                <Link className="nav-link text-light" to="/contact">CONTACT<span
                    className="sr-only">(current)</span></Link>
            </li>
           {/* User shall see a link to the about page rubric74
            Clicking on the about page link should take the user to the about
            page
            rubric77
           */}
            <li className="nav-item active">
                <Link className="nav-link text-light" to="/about">ABOUT<span
                    className="sr-only">(current)</span></Link>
            </li>
        </ul>

    </nav>
    )
};

export default Footer;