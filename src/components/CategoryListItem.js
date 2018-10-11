/**
 * Created by lilit on 2018-10-02.
 */

import React from 'react';
import {NavItem, Collapse, NavLink} from 'reactstrap';
import {connect} from 'react-redux';
import {selectSubCategory} from '../redux/actions/categories';


class CategoryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }

    toggleCategory = () => {
        this.setState({collapse: !this.state.collapse});
    };

    handleSelectedSubCategory = (subCategory) => {
        this.props.dispatch(selectSubCategory(subCategory));
    };

    render() {
        return (
            <NavItem>
                <NavLink style={{fontSize: '1.3rem' }} onClick={this.toggleCategory}>{this.props.categoryObject.category}</NavLink>
                <Collapse isOpen={this.state.collapse}>
                {this.props.categoryObject.subcategories.map((subcategory, id) => {
                    return (
                        <div className="text-muted" style={{marginLeft: '1rem'}} key = {id}>
                                <NavLink onClick={() => this.handleSelectedSubCategory(subcategory)}>{subcategory.name}</NavLink>
                        </div>
                    )
                })}
                </Collapse>
            </NavItem>
        );
    }
}
export  default connect()(CategoryListItem);