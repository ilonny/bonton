import { pageData } from "../../pages/home/data";
import { GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS } from "./actions";
import {SET_PAGINATION} from "../catalog-filters"
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
        default: {
            return { ...state }
        }
    }
}

productReducer.getProducts = () => dispatch => {
    console.log('getProducts start')
    dispatch({ type: GET_PRODUCTS_START })
    setTimeout(() => {
        dispatch({ type: GET_PRODUCTS_SUCCESS, products: pageData.catalogList.list });
        dispatch({ type: SET_PAGINATION, pages: pageData.catalogList.pages });
    }, 2000);
}