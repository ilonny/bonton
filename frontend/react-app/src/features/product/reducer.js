import { pageData } from "../../pages/home/data";
import { GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_CURRENT_PRODUCT_SUCCESS } from "./actions";
import { SET_PAGINATION } from "../catalog-filters"
const initialState = {
    products: [],
    loading: false,
    currentProduct: undefined,
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_START: {
            return { ...state, loading: true }
        }
        case GET_PRODUCTS_SUCCESS: {
            return { ...state, loading: false, products: action.products }
        }
        case GET_CURRENT_PRODUCT_SUCCESS: {
            return { ...state, loading: false, currentProduct: action.currentProduct }
        }
        default: {
            return { ...state }
        }
    }
}

productReducer.getProducts = (id) => (dispatch, getState) => {
    id = parseInt(id);
    dispatch({ type: GET_PRODUCTS_START })
    if (id) {
        if (getState().product.products.length) {
            //взять из стора
            dispatch({ type: GET_CURRENT_PRODUCT_SUCCESS, currentProduct: getState().product.products.find(el => el.id === id) });
        } else {
            //сделать запрос
            setTimeout(() => {
                dispatch({ type: GET_CURRENT_PRODUCT_SUCCESS, currentProduct: pageData.catalogList.list.find(el => el.id === id) });
            }, 2000);
        }
    } else {
        setTimeout(() => {
            dispatch({ type: GET_PRODUCTS_SUCCESS, products: pageData.catalogList.list });
            dispatch({ type: SET_PAGINATION, pages: pageData.catalogList.pages });
        }, 2000);
    }
}
