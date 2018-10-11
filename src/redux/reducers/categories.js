/**
 * Created by lilit on 2018-10-03.
 */

import {LOAD_CATEGORIES, SELECT_SUBCATEGORIES, SELECT_ITEM, ADD_ITEM_TO_CART, REMOVE_ITEM, REMOVE_ITEM_FROM_CART} from '../actions/categories';

export const categoryReducer = (state = {}, action)=> {
    switch (action.type) {
        case LOAD_CATEGORIES:
            return {...state, categories: action.categories, items: action.items};
        case SELECT_SUBCATEGORIES:
            return {...state, selectedSubCategory: action.selectedSubCategory};
        case SELECT_ITEM:
            return {...state, item: action.item};
        case ADD_ITEM_TO_CART:
            return {...state, cart: action.cart};
        case REMOVE_ITEM:
            return {...state, cart: action.cart};
        case REMOVE_ITEM_FROM_CART:
            return {...state, cart: action.cart};
        default:
            return {...state};
    }
};

export default categoryReducer;

