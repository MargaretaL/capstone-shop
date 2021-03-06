/**
 * Created by lilit on 2018-10-04.
 */


import React, {Component} from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Input, Label
} from 'reactstrap';
import {connect} from 'react-redux';
import {addNrOfItemsToCart} from '../redux/actions/categories';


class ItemCards extends Component {

    state= {
        value: 0
    };

    addToCart = (item) => {
        let nr = this.state.value;
        this.props.dispatch(addNrOfItemsToCart(item, nr));
    };

    handleInput = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    render() {

        return (
            <div className="d-flex mt-5 flex-wrap">
                <Card className="col-lg-6 bg-light p-0">
                    {/*The user should an image of the selected product rubric36*/}
                    <CardImg top height="400px" width="auto" src={this.props.item && this.props.item.imagelink}
                             alt="Card image cap"/>
                </Card>
                <Card className="col-lg-6 mb-8">
                    <CardBody>
                        {/*The user should the name of the selected product, rubric35*/}
                        <CardTitle>{this.props.item && this.props.item.name}</CardTitle>
                        {/*The user should see the price of the selected product rubric39*/}
                        <CardSubtitle>Price: {this.props.item && this.props.item.price}</CardSubtitle>
                        {/*The user should see a description of the selected product rubric40*/}
                        <CardText>Description: {this.props.item && this.props.item.description}</CardText>
                        {/*The user should see the number of items in stock of the selected
                         product rubric38*/}
                        <CardText>In stock: {this.props.item && this.props.item.stock}</CardText>
                        {/*The user should see the rating of the selected product rubric37*/}
                        <CardText>Rating: {this.props.item && this.props.item.rating}</CardText>
                        {/*The user should see an input field labeled “Qty” rubric42*/}
                        <Label>Qty</Label>
                        <Input type="number" className="w-25 mb-3" min="0" onChange={(e) => this.handleInput(e)}/>
                        {/*The user should see a button labeled “Add” rubric41
                         Clicking the “Add” button should add the number of units
                         specified in the “Qty” input field of the selected product to the
                         shopping cart
                         rubric44
                         */}
                        <Button onClick={(e) => this.addToCart(this.props.item, e)}>ADD
                        </Button>
                    </CardBody>
                </Card>
                <div className="mt-3">
                    {/*The user should see a button labeled “Back” rubric43
                     Clicking the “Back” button should take the user back to where
                     they came from, whether it was the Shopping page or the
                     Product Page.
                     rubric45
                     */}
                    <Button onClick={this.props.history.goBack}>Back</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({items}, props) => {
    const {name} = props.match.params;

    const item = items && items.find(i => i.name === name);

    return {
        item: item,
    }
};

export default connect(mapStateToProps)(ItemCards);
