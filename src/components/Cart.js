/**
 * Created by lilit on 2018-10-01.
 */

import React from 'react';
import {connect} from 'react-redux';

import {removeItemFromCart} from '../redux/actions/categories';
import {addItemToCart} from '../redux/actions/categories';



class Cart extends React.Component {


    handleRemoveItemFromCart = (item) => {
        this.props.dispatch(removeItemFromCart(item));
    };

    handleAddItemToCart = (item) => {
        this.props.dispatch(addItemToCart(item));
    };

    backToShopping = () => {
        this.props.history.push(`/shopping`)
    };

    render() {

        if(this.props.cart===undefined) {
            return (<div>
                <h2>You have no products in your cart.</h2>
                <button onClick={this.backToShopping}>Back to shopping</button>
            </div>)
        }

        const total = this.props.cart.reduce((acc, cartItems) => acc + (cartItems.item.price * cartItems.quantity), 0);

        return (
            <div>
                <h2>Here is your cart!</h2>
                {this.props.cart.map((cartItem, id) => {
                    return <ul key={id} className="row">
                        <li>{cartItem.item.name}, Price: {cartItem.item.price}</li>
                        Qty:
                        <button onClick={() => this.handleRemoveItemFromCart(cartItem.item)}>-</button>
                            <p>{cartItem.quantity}</p>
                        <button onClick={() => this.handleAddItemToCart(cartItem.item)}>+</button>
                    </ul>
                })}
                <p>Total: {total}</p>
                <div>
                    <button onClick={this.props.history.goBack}>Back</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({cart}) => {
    return {
        cart: cart
    }
};

export default connect(mapStateToProps)(Cart);
