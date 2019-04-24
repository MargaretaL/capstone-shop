/**
 * Created by lilit on 2019-04-24.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Footer = (props) => {
    return (
        /*The header bar should always be at the top of the page rubric68*/
        <nav className="navbar navbar-expand-lg fixed-top mb-5"
             style={{backgroundColor: '#84b267', height: 100, fontWeight: 'bold'}}>
            <ul className="navbar-nav mr-auto">
                {/*User shall see a link to the home page rubric65
                 Clicking the home page link should take the user to the home
                 page
                 rubric69
                */}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">HOME<span
                        className="sr-only">(current)</span></Link>
                </li>
                {/*User shall see a link to the shopping page rubric66
                 Clicking the shopping page link should take the user to the
                 shopping page rubric70
                */}
                <li className="nav-item">
                    <Link className="nav-link" to="/shopping">SHOPPING
                        PAGE</Link>
                </li>
            </ul>
            <ul className="navbar-nav">
                {/*User shall see a link to the cart page rubric67
                 Clicking the cart page link should take the user to the cart page rubric71
                */}
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">CART ({props.cart && props.cart.length})</Link>
                </li>
            </ul>
        </nav>
    )
};

const mapStateToProps = ({cart}) => {
    return {
        cart: cart
    }
};

export default connect(mapStateToProps)(Footer);