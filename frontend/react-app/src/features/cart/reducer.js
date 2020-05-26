import {
    // CART_ADD,
    // CART_REMOVE,
    SET_CART_PRODUCTS
} from './actions';
const initialState = {
    cart_id: undefined,
    products: [],
    total_price: false,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_PRODUCTS: {
            return { ...state, products: action.products }
        }
        default: {
            return { ...state }
        }
    }
}

cartReducer.addToCart = product_id => (dispatch, getState) => {
    let cartProducts = getState().cart.products;
    let existingProductIndex = cartProducts.findIndex(product => product.id === product_id);
    if (existingProductIndex !== -1) {
        cartProducts[existingProductIndex].count++
    } else {
        cartProducts.push({ id: product_id, count: 1 })
    }
    dispatch({ type: SET_CART_PRODUCTS, products: cartProducts });
}

const filterByElem = (item, arr) => arr.filter(a_item => a_item.id !== item.id);

cartReducer.removeFromCart = product_id => (dispatch, getState) => {
    let cartProducts = getState().cart.products;
    let existingProductIndex = cartProducts.findIndex(product => product.id === product_id);
    if (existingProductIndex !== -1) {
        if (cartProducts[existingProductIndex].count < 2) {
            cartProducts = filterByElem(cartProducts[existingProductIndex], cartProducts);
        } else {
            cartProducts[existingProductIndex].count--
        }
    } else {
        cartProducts = filterByElem(cartProducts[existingProductIndex], cartProducts);
    }
    dispatch({ type: SET_CART_PRODUCTS, products: cartProducts });
}