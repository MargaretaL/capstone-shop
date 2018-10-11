import React, {Component} from 'react';
import './App.css';
import {Link, BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Shopping from './components/Shopping';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';

import {getCategories} from './utils/api';
import {loadCategories} from './redux/actions/categories';
import {connect} from 'react-redux';


class App extends Component {

    async componentDidMount() {
        const response = await getCategories();
        await this.props.dispatch(loadCategories(response))
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <nav className="navbar navbar-expand-lg"
                             style={{backgroundColor: '#E9C904', height: 100, fontWeight: 'bold'}}>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">HOME<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shopping">SHOPPING
                                        PAGE</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">CART</Link>
                                </li>
                            </ul>
                        </nav>
                        <nav className="navbar navbar-expand-lg navbar-dark fixed-bottom"
                             style={{backgroundColor: '#8FC33A'}}>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">HOME<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/contact">CONTACT<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/about">ABOUT<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                            </ul>

                        </nav>
                        <div className="container p-4 bg-light">
                                <Route path='/' exact component={Home}/>
                            <Route path='/shopping' exact component={Shopping}/>
                            <Route path='/cart' exact component={Cart}/>
                            <Route path='/product/:name' exact component={Product}/>
                            <Route path='/about' exact component={About}/>
                            <Route path='/contact' exact component={Contact}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect()(App);
