/**
 * Created by lilit on 2018-10-01.
 */

import React from 'react';
import {Nav} from 'reactstrap';
import CategoryListItem from './CategoryListItem';
import ItemCards from './ItemCards';
import {connect} from 'react-redux';
import CategoryHeader from './CategoryHeader';
import {sortItem, inStock} from '../redux/actions/categories';


class Shopping extends React.Component {

    sortByRating = () => {
        this.props.dispatch(sortItem('rating'));
    };

    sortByPrice = () => {
        this.props.dispatch(sortItem('price'));
    };

    sortByAlphabet = () => {
        this.props.dispatch(sortItem('alphabet'))
    };

    inStockOnly = (e) => {
        this.props.dispatch(inStock(e.target.checked))
    };

    render() {
        return (
            <div className="mt-5">
                <CategoryHeader sortRating={this.sortByRating}
                                sortPrice={this.sortByPrice}
                                sortAlphabet={this.sortByAlphabet}
                                selectedSubCategory={this.props.selectedSubCategory}
                                inStockOnly={this.inStockOnly}
                                inStock={this.props.inStock}
                />

                <div className="d-flex flex-wrap">
                    <div className="col-lg-4 border-dark">
                        <Nav vertical className="bg-light shadow-lg">   {
                            !this.props.selectedSubCategory &&
                            <div className="text-center"><h5>Choose Category</h5></div>
                        }
                            {this.props.categories && this.props.categories.map((categoryObject, id) => {
                                return (

                                        <CategoryListItem categoryObject={categoryObject} key={id}/>
                                );
                            })}
                        </Nav>
                    </div>
                    <div className="col-lg-8 m-sm-auto flex-wrap">
                        <ItemCards/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({categories, selectedSubCategory, inStock}) => {
    return {
        categories,
        selectedSubCategory,
        inStock
    }
};
export default connect(mapStateToProps)(Shopping);