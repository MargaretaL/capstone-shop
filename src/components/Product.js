/**
 * Created by lilit on 2018-10-04.
 */


import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItemToCart} from '../redux/actions/categories';


class ItemCards extends React.Component {

    addToCart = (item) => {
        this.props.dispatch(addItemToCart(item));
    };

    render() {
        return (
            <div className="row">
                <Card className="col-2" style={{height:150}}>
                    <CardImg top height="100px" width="auto" src={this.props.item && this.props.item.imagelink} alt="Card image cap"/>
                </Card>
                <div className="col-10">
                    <Card className="mb-8">
                        <CardBody>
                            <CardTitle>{this.props.item && this.props.item.name}</CardTitle>
                            <CardSubtitle>Price: {this.props.item && this.props.item.price}</CardSubtitle>
                            <CardText>Description: {this.props.item && this.props.item.description}</CardText>
                            <Button onClick={() => this.addToCart(this.props.item)}>ADD
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({items}, props) => {
    const {name} = props.match.params;

    const item = items && items.find(i => i.name === name);

    return {
        item: item
    }
};

export default connect(mapStateToProps)(ItemCards);