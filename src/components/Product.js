/**
 * Created by lilit on 2018-10-04.
 */


import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addNrOfItemsToCart} from '../redux/actions/categories';


const ItemCards = (props) => {


    const addToCart = (item, e) => {
        let nr = +e.target.value;
        props.dispatch(addNrOfItemsToCart(item, nr));
    };

    return (
        <div className="d-flex mt-5 flex-wrap">
            <Card className="col-lg-6 bg-light p-0">
                <CardImg top height="400px" width="auto" src={props.item && props.item.imagelink}
                         alt="Card image cap"/>
            </Card>
            <Card className="col-lg-6 mb-8">
                <CardBody>
                    <CardTitle>{props.item && props.item.name}</CardTitle>
                    <CardSubtitle>Price: {props.item && props.item.price}</CardSubtitle>
                    <CardText>Description: {props.item && props.item.description}</CardText>
                    <CardText>In stock: {props.item && props.item.stock}</CardText>
                    <CardText>Rating: {props.item && props.item.rating}</CardText>
                    <Input type="number" className="w-25 mb-3" min="0" placeholder={props.cart && props.cart.quantity} onChange={(e) => addToCart(props.item,e)}/>
                    <Button onClick={(e) => addToCart(props.item, e)}>ADD
                    </Button>
                </CardBody>
            </Card>
            <div className="mt-3">
                <Button onClick={props.history.goBack}>Back</Button>
            </div>
        </div>
    )
};
const mapStateToProps = ({items, cart}, props) => {
    const {name} = props.match.params;

    const item = items && items.find(i => i.name === name);

    return {
        item: item,
        cart: cart && cart.find(cartItem=> cartItem.item.name === name)
    }
};

export default connect(mapStateToProps)(ItemCards);
