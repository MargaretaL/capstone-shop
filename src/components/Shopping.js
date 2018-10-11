/**
 * Created by lilit on 2018-10-01.
 */

import React from 'react';
import {Nav} from 'reactstrap';
import CategoryListItem from './CategoryListItem';
import ItemCards from './ItemCards';
import {connect} from 'react-redux';


const Shopping = (props) => {

        return (
            <div className="row">
                <div className="col-4">
                    <Nav vertical>
                        {props.categories && props.categories.map((categoryObject, id) => { //&& ifall 1a sant kör andra med.
                            return (
                                <CategoryListItem categoryObject={categoryObject} key={id}/>
                            );
                        })}
                    </Nav>
                </div>
                <div className="col-8">
                    <ItemCards/>
                </div>
            </div>
        );

};

const mapStateToProps = ({categories, selectedSubCategory}) =>{
    return {
        categories,
        selectedSubCategory
    }
};
export default connect(mapStateToProps)(Shopping);