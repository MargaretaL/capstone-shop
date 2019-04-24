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
            <div className="mb-5">
                <div className="row">
                    {this.props.items && this.props.items.map((item, id) => {
                        return (
                            <div className="col-lg-4 col-sm-8 mb-3" key={id}>
                                <Card className=" mb-3 h-100">
                                  {/*  If the user clicks on a product image within a grid cell, they should
                                    be taken to a product page that is populated with the details of
                                    the clicked product, rubric31*/}
                                    <Link to={`/product/${item.name}`}
                                    >
                                        {/*Each grid cell shall have an image of the product displayed, rubric23*/}
                                        <CardImg
                                            className="bg-light"
                                            top height="150px"
                                            width="auto"
                                            src={item.imagelink}
                                            alt="Card image cap"/></Link>
                                    <CardBody>
                                        {/*Each grid cell shall have the name of the product displayed, rubric21
                                         If the user clicks on a product name within a grid cell, they should
                                         be taken to a product page that is populated with the details of
                                         the clicked product
                                        */}
                                        <Link className="text-dark"
                                              to={`/product/${item.name}`}><CardTitle>{item.name}</CardTitle></Link>
                                        {/*Each grid cell shall have the price of the product displayed, rubric22*/}
                                        <CardSubtitle>PRICE: {item.price}</CardSubtitle>
                                        <CardText>Rating: {item.rating}</CardText>
                                        <CardText>{item.description}</CardText>
                                    </CardBody>
                                    {/*Each grid cell shall have a button labeled “Add”, rubric24
                                     Clicking on the “Add” button inside a grid cell should add 1 unit of
                                     the associated product to the shopping cart, rubric30
                                    */}
                                    <Button className="bg-secondary m-4"
                                            onClick={() => this.addToCart(item)}>ADD</Button>
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