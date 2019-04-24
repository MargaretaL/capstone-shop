import React, {Component} from 'react';
import './App.css';
import {Link, BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Shopping from './components/Shopping';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'

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
                        <nav className="navbar navbar-expand-lg fixed-top mb-5"
                             style={{backgroundColor: '#84b267', height: 100, fontWeight: 'bold'}}>
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
                                    <Link className="nav-link" to="/cart">CART ({this.props.cart && this.props.cart.length})</Link>
                                </li>
                            </ul>
                        </nav>
                        <ScrollToTop>
                            <div className="container p-4 mt-5" style={{backgroundColor: '#dfe7d8'}}>
                                <Route path='/' exact component={Home}/>
                                <Route path='/shopping' exact component={Shopping}/>
                                <Route path='/cart' exact component={Cart}/>
                                <Route path='/product/:name' exact component={Product}/>
                                <Route path='/about' exact component={About}/>
                                <Route path='/contact' exact component={Contact}/>
                            </div>
                        </ScrollToTop>
                            <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = ({cart}) => {
    return {
        cart: cart
    }
};

export default connect(mapStateToProps)(App);
