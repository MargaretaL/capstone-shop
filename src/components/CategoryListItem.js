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
                   {/* The user shall see a category menu that displays all of the
                    available shopping categories, rubric19
                    Clicking on a category name in the category menu should toggle a
                    dropdown of the available subcategories within that category, rubric25*/}
                    <NavLink style={{fontSize: '1.3rem'}}
                             onClick={this.toggleCategory}>{this.props.categoryObject.category}</NavLink>
                    <Collapse isOpen={this.state.collapse}>
                        {this.props.categoryObject.subcategories.map((subcategory, id) => {
                            return (
                                <div className="text-muted" style={{marginLeft: '1rem'}} key={id}>
                                    {/*Clicking on a subcategory should repopulate the grid of products
                                    with items from the subcategory that was just clicked.rubric26
                                     Clicking on a subcategory should change the name of the selected
                                     category in the controls bar, rubric27
                                    */}
                                    <NavLink
                                        onClick={() => this.handleSelectedSubCategory(subcategory)}>{subcategory.name}</NavLink>
                                </div>
                            )
                        })}
                    </Collapse>
                </NavItem>
        );
    }
}
export  default connect()(CategoryListItem);
