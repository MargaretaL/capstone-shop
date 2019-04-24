/**
 * Created by lilit on 2018-10-17.
 */
import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Label,
    Input
} from 'reactstrap';

const SortDropDown = (props) => {
     return (
            <div>
                {/*The user shall see a controls bar, rubric14*/}
                <Navbar color="light" light expand="md" className="m-3 shadow-lg">
                    {/*The user shall see a section in the controls bar that displays the
                    selected category name, rubric15*/}
                    <NavbarBrand>{(props.selectedSubCategory && props.selectedSubCategory.name) || ''}</NavbarBrand>
                  {/*  The user shall see a section in the controls bar that displays the
                    number of items shown out of the total number of items in the
                    selected category, rubric16*/}
                    {props.selectedSubCategory?   <span>({props.selectedSubCategory && props.selectedSubCategory.items.filter(item => !props.inStock || item.stock > 0 )
                        .length}/{props.selectedSubCategory && props.selectedSubCategory.items.length})</span>: null}
                   {/* The user shall see a toggle switch labeled “In Stock Only” in the
                    controls bar, rubric17
                    The section of the controls bar that displays the number of items
                    shown out of the total number of items in the selected category
                    should update whenever a new subcategory is selected or
                    whenever the “In Stock Only” switch is toggled.rubric28
                    If the “In Stock Only” toggle is checked, only items that are in
                    stock should be shown in the products grid. rubric29
                    */}
                    <Label check className="ml-5">
                        <Input type="checkbox" onChange={props.inStockOnly}/>
                        In Stock Only
                    </Label>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        </NavItem>
                       {/* The user shall see a dropdown list labeled “Sort By” that has the
                        following options: (None, Price, Alphabetical, Rating) in the
                        controls bar, rubric18
                        Changing the selected sorting method should reorder the
                        products in the grid, rubric33
                        */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Sort By
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={props.sortPrice}>
                                    Price
                                </DropdownItem>
                                <DropdownItem onClick={props.sortAlphabet}>
                                    Alphabetically
                                </DropdownItem>
                                <DropdownItem onClick={props.sortRating}>
                                    Rating
                                </DropdownItem>
                                <DropdownItem onClick={props.sortRating}>
                                    None
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
};

export default SortDropDown;
