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

        console.log(this.props.items);
        return (
            <div>
                <div className="row">
                    {this.props.items && this.props.items.map((item, id) => {
                        return (
                            <div className="col-lg-4 col-sm-8 mb-3" key={id}>
                                <Card className=" mb-3 h-100">
                                    <Link to={`/product/${item.name}`}
                                    ><CardImg
                                        className="bg-light"
                                        top height="150px"
                                        width="auto"
                                        src={item.imagelink}
                                        alt="Card image cap"/></Link>
                                    <CardBody>
                                        <Link className="text-dark"
                                              to={`/product/${item.name}`}><CardTitle>{item.name}</CardTitle></Link>
                                        <CardSubtitle>PRICE: {item.price}</CardSubtitle>
                                        <CardText>Rating: {item.rating}</CardText>
                                        <CardText>{item.description}</CardText>
                                    </CardBody>
                                    <Button className="bg-secondary m-4" onClick={() => this.addToCart(item)}>ADD</Button>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({selectedSubCategory, sortOrder, inStock}) => {
    return {
        items: selectedSubCategory && selectedSubCategory.items
            .filter(item => !inStock || item.stock > 0)
            .sort((a, b) => {

                if (sortOrder === 'rating') {
                    return a.rating - b.rating;
                }
                if (sortOrder === 'price') {
                    return a.price - b.price;
                }
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                else return selectedSubCategory
            })
    };
};
export default connect(mapStateToProps)(ItemCards);