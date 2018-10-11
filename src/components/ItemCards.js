/**
 * Created by lilit on 2018-10-03.
 */

import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addItemToCart} from '../redux/actions/categories';


class ItemCards extends React.Component {


    addToCart = (item) => {
        this.props.dispatch(addItemToCart(item));
    };

    render() {
        return (
            <div className="row">
                {this.props.items && this.props.items.map((item, id) => {
                    return (
                        <div className="col-4" key = {id}>
                            <Card className="mb-4">
                                <Link to={`/product/${item.name}`}
                                      ><CardImg top height="150px"
                                                                                              width="auto"
                                                                                              src={item.imagelink}
                                                                                              alt="Card image cap"/></Link>
                                <CardBody>
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardSubtitle>PRICE: {item.price}</CardSubtitle>
                                    <CardText>{item.description}</CardText>
                                    <Button onClick={()=> this.addToCart(item)}>ADD</Button>
                                </CardBody>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = ({selectedSubCategory}) => {
    return {
        items: selectedSubCategory && selectedSubCategory.items
    }
};

export default connect(mapStateToProps)(ItemCards);