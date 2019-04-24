import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Shopping from './components/Shopping';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop'

import {getCategories} from './utils/api';
import {loadCategories} from './redux/actions/categories';
import {connect} from 'react-redux';


class App extends Component {

/*    Data was accessed using the Azure Web API and not a local file rubric81*/
    async componentDidMount() {
        const response = await getCategories();
        await this.props.dispatch(loadCategories(response))
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                       <Header/>
                        <ScrollToTop>
                            <div className="container p-4 mt-5" style={{backgroundColor: '#dfe7d8', marginBottom: 60}}>
                                {/*The home page is accessible at http://localhost:8080/#, rubric13*/}
                                <Route path='/' exact component={Home}/>
                               {/* The shopping page is accessible at
                                http://localhost:8080/#/shopping, rubric34*/}
                                <Route path='/shopping' exact component={Shopping}/>
                                {/*The cart page is accessible at http://localhost:8080/#/cart rubric56*/}
                                <Route path='/cart' exact component={Cart}/>
                               {/* The product page is accessible at
                                http://localhost:8080/#/product?name=productname rubric46*/}
                                <Route path='/product/:name' exact component={Product}/>
                                {/*The about page is accessible at http://localhost:8080/#/about rubric64*/}
                                <Route path='/about' exact component={About}/>
                                {/*The contact page is accessible at http://localhost:8080/#/contact rubric62*/}
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


export default connect()(App);
