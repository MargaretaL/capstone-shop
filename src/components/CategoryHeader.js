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
                <Navbar color="light" light expand="md" className="m-3 shadow-lg">
                    <NavbarBrand>{(props.selectedSubCategory && props.selectedSubCategory.name) || ''}</NavbarBrand>
                    {props.selectedSubCategory?   <span>({props.selectedSubCategory && props.selectedSubCategory.items.filter(item => !props.inStock || item.stock > 0 )
                        .length}/{props.selectedSubCategory && props.selectedSubCategory.items.length})</span>: null}

                    <Label check className="ml-5">
                        <Input type="checkbox" onChange={props.inStockOnly}/>
                        In Stock Only
                    </Label>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        </NavItem>
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
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
};

export default SortDropDown;
