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
const filterByElem = (item, arr) => arr.filter(a_item => a_item.id !== item.id);

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_PRODUCTS: {
            return { ...state, products: action.products, total_price: action.products.reduce((a, b) => a + b.price * b.count, 0) }
        }
        default: {
            return { ...state }
        }
    }
}

cartReducer.addToCart = product_id => (dispatch, getState) => {
    let cartProducts = getState().cart.products;
    let productPrice = parseFloat(getState().product.products.find(item => item.id === product_id).price);
    let existingProductIndex = cartProducts.findIndex(product => product.id === product_id);
    if (existingProductIndex !== -1) {
        cartProducts[existingProductIndex].count++
    } else {
        cartProducts.push({ id: product_id, count: 1, price: productPrice })
    }
    dispatch({ type: SET_CART_PRODUCTS, products: cartProducts });
}


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