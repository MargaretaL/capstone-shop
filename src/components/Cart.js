/**
 * Created by lilit on 2018-10-01.
 */

import React from 'react';
import {connect} from 'react-redux';
import {removeItemFromCart, removeCartItem, addItemToCart, addNrOfItemsToCart} from '../redux/actions/categories';
import {Button, Form, FormGroup, Input, Card, CardBody, Row, Col} from 'reactstrap';


class Cart extends React.Component {

    state= {
        value: 0
    };

    handleRemoveCartItem = (item) => {
        this.props.dispatch(removeCartItem(item));
    };

    handleRemoveItemFromCart = (item) => {
        this.props.dispatch(removeItemFromCart(item));
    };

    handleAddItemToCart = (item) => {
        this.props.dispatch(addItemToCart(item));
    };

    backToShopping = () => {
        this.props.history.push(`/shopping`)
    };

    handleInput = (item, e) => {
        let nr = +e.target.value || 1;
        this.props.dispatch(addNrOfItemsToCart(item, nr, true));
    };

    render() {

        if (this.props.cart === undefined) {
            return (
                <div className="mt-5 ml-5">
                    <h2>You have no products in your cart.</h2>
                    <Button className="bg-info" onClick={this.backToShopping}>Back to shopping</Button>
                </div>
            )
        }

        const onSubmit = (e) => {
            alert('Thank you for your order! Total Cost: ' + total.toFixed(2) + '$ Shipping: ' + shipping)
        };

        const subtotal = this.props.cart.reduce((acc, cartItems) => acc + (cartItems.item.price * cartItems.quantity), 0);
        const shipping = 5;
        const tax = 1.25;

        const total = subtotal * tax + shipping;

        return (
                <div className="mt-5">
                    <h2>Here is your cart</h2>
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="col-lg-8">
                            {this.props.cart.map((cartItem, index) => {
                                return (
                                    <Card className="bg-white" key={index}>
                                        <CardBody>
                                            <Row className="align-items-center">
                                              {/*  The user should a table displaying the product image, name, unit
                                                price, quantity as an input field, total cost, and a remove button
                                                for each product in the shopping cart.rubric47
                                               The cost column in the table should update if the quantity input
                                               field is changed rubric55 */}
                                                <Col>
                                                    <img src={cartItem.item.imagelink} alt="" className="w-25 h-25"/>
                                                </Col>
                                                <Col>
                                                    <strong className="mr-1">{cartItem.item.name}:</strong>{cartItem.item.price}$, <strong className="mr-1">Total:</strong> {cartItem.item.price*cartItem.quantity}$
                                                </Col>
                                                <Col>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <Button className="btn btn-outline-danger"
                                                                    onClick={() => this.handleRemoveItemFromCart(cartItem.item)}>-</Button>
                                                        </div>
                                                        <Input min='0' className="form-control" value={cartItem.quantity}
                                                               onChange={(e) => this.handleInput(cartItem.item, e)}/>
                                                        <div className="input-group-append mr-1">
                                                            <Button className="btn btn-outline-success"
                                                                    onClick={() => this.handleAddItemToCart(cartItem.item)}>+</Button>
                                                        </div>
                                                      {/*  The remove button should remove an item from the shopping
                                                        cart
                                                        rubric54*/}
                                                        <Button className=" btn btn-outline-danger"
                                                                onClick={() => this.handleRemoveCartItem(cartItem.item)}>Remove</Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                )
                            })}
                            <h4>Subtotal: {subtotal.toFixed(2)}$</h4>
                            <div className="m-3">
                                <Button className="bg-info" onClick={this.props.history.goBack}>Back</Button>
                            </div>
                        </div>
                        <Card className="bg-white col-lg-4 mb-3 text-dark p-5 border-light shadow-lg">
                       {/*     The user should see a section showing the subtotal cost of all the
                            items in the shopping cart, the shipping cost, the tax cost, and a
                            total cost of all of the items in the shipping cost.
                            rubric49
                        The cost details section should update if any items are removed
                        from the shopping cart of if any of the item quantities are
                        updated
                        rubric53
                            */}
                            <CardBody>
                                <h4>Cart Summary</h4>
                                <h5>Subtotal: {subtotal.toFixed(2)}$</h5>
                                <p>Shipping: 5$</p>
                                <p>tax: 25%</p>
                                <h5>Total: <p>{total.toFixed(2)}$</p></h5>
                            </CardBody>
                        </Card>
                    </div>
           {/*         The user should see a form labeled “Enter Shipping Details” that
                    has text input fields for the users name, address, city, and phone
                    number. These input fields should have placeholders that show
                    what they represent.
                    rubric48*/}
                    <Form onSubmit={onSubmit} className="col-lg-6 mb-sm-3 bg-white p-2 shadow border-light">
                        <fieldset className="text-center">
                            <label>Enter Shipping Details</label>
                           {/* The form should show validation errors if the form isn’t filled out
                            correctly and the checkout button is pressed rubric52*/}
                            <FormGroup className="form-inline">
                                    <Input type="text" name="firstname" placeholder="firstname" required={true}/>
                                    <Input type="text" name="lastname" placeholder="lastname" required={true}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="Address" placeholder="Address" required={true}/>
                            </FormGroup>
                            <FormGroup className="form-inline">
                                    <Input type="text" name="city" placeholder="City" required={true}/>
                                    <Input type="tel" name="tel" placeholder="Phone number" required={true}/>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                            </FormGroup>
                            {/*The user should see a checkout button rubric50
                             The checkout button should create an alert based on the users
                             shipping details and total cost. rubric51
                            */}
                            <Button type="submit" className="bg-success">Checkout</Button>
                        </fieldset>
                    </Form>
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
