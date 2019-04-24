/***Created by lilit on 2018-10-03.*/

import {getCategories} from '../../utils/api';
import {store} from '../../index';


export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const SELECT_SUBCATEGORIES = 'SELECT_SUBCATEGORIES';
export const SELECT_ITEM = 'SELECT_ITEM';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const ADD_NROF_ITEMS_TO_CART = 'ADD_NROF_ITEMS_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const SET_IN_STOCK = 'SET_IN_STOCK';


export const loadCategories = () => async (dispatch) => { //stor array, items långt in, därför används reduce och map.
    const categories = await getCategories();
    const subCategories = categories
        .map(c => c.subcategories)
        .reduce((newArray, subCatArray) => newArray.concat(subCatArray), []);
    console.log(subCategories);

    const items = subCategories
        .map(subCat => subCat.items)
        .reduce((newArray, itemArray) => newArray.concat(itemArray), []);
    console.log(items);
    dispatch({
        type: LOAD_CATEGORIES,
        categories,
        items
    })
};

export const selectSubCategory = (selectedSubCategory) => (dispatch) => {
    dispatch({
        type: SELECT_SUBCATEGORIES,
        selectedSubCategory
    })
};

export const selectItem = (item) => (dispatch) => {
    dispatch({
        type: SELECT_ITEM,
        item
    })
};

export const addItemToCart = (item) => (dispatch) => {
    const state = store.getState();
    let cart = state.cart || [];
    let cartItem = cart.find(cItem => cItem.item === item);
    if (!cartItem) {
        cart.push({
            item, quantity: 1
        });
    } else {
        cartItem.quantity++;
    }
    dispatch({
        type: ADD_ITEM_TO_CART,
        cart: cart.map(c => c)
    })
};

export const addNrOfItemsToCart = (item,nr,replace) => (dispatch) => {
    console.log(nr);
    const state = store.getState();
    let cart = state.cart || [];
    let cartItem = cart.find(cItem => cItem.item === item);
    if(!cartItem) {
        cart.push({item, quantity: +nr});
    } else {
        cartItem.quantity = replace ? +nr : +cartItem.quantity + +nr;
    }
    dispatch({
        type: ADD_NROF_ITEMS_TO_CART,
        cart: cart.map(c => c)
    })
};

export const removeItemFromCart = (item) => (dispatch) => {
    const state = store.getState();
    let cart = state.cart || [];
    let cartItem = cart.find(cItem => cItem.item === item);
    if (cartItem) {
        cartItem.quantity--;
    }
    if (cartItem.quantity === 0) {
        cart = cart.filter(c => c !== cartItem);
    }
    dispatch({
        type: REMOVE_ITEM_FROM_CART,
        cart: cart.map(c => c)
    })
};

export const removeCartItem = (item) => (dispatch) => {
    const state = store.getState();
    let cart = state.cart || [];
    let cartItem = cart.find(cItem => cItem.item === item);
    cartItem.quantity = 0;
    if (cartItem.quantity === 0) {
        cart = cart.filter(c => c !== cartItem);
    }
    dispatch({
        type: REMOVE_ITEM,
        cart: cart.map(c => c)
    })
};

export const sortItem = (sortOrder) => (dispatch) => {
    dispatch({
        type: SET_SORT_ORDER,
        sortOrder
    })
};

export const inStock = (inStock) => (dispatch) => {
    dispatch({
        type: SET_IN_STOCK,
        inStock
    })
};
