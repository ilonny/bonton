// import { pageData } from "../../pages/home/data";
import { GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_CURRENT_PRODUCT_SUCCESS } from "./actions";
import { SET_PAGINATION, SET_FILTERS } from "../catalog-filters"
import { request } from "../../lib";
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
    dispatch({ type: GET_PRODUCTS_START })
    if (Array.isArray(id)) {
        console.log('arr id', id)
        //зарпос с конкретными айди за продуктами
        request({
            method: 'GET',
            url: `get-products?id=${JSON.stringify(id)}&is_array=1`,
        }).then((response) => {
            // console.log('get product response', response);
            // const data = response.products_on_page[0];
            // let photos = [];
            // if (data) {
            //     photos = data.photos;
            // }
            dispatch({ type: GET_PRODUCTS_SUCCESS, products: response.products_on_page });
            dispatch({ type: SET_PAGINATION, pages: response.pages_count });
            dispatch({ type: SET_FILTERS, params: response.filters });
            // dispatch({
            //     type: GET_CURRENT_PRODUCT_SUCCESS, currentProduct: {
            //         ...data,
            //         photos: photos.length ? JSON.parse(data.photos) : [],
            //         options: response.filters
            //     }
            // });
        });
    } else {
        id = parseInt(id);
        if (id) {
            // if (getState().product.products.length) {
            //     //взять из стора
            //     const data = getState().product.products.find(el => el.id === id);
            //     const { photos } = data;
            //     dispatch({
            //         type: GET_CURRENT_PRODUCT_SUCCESS, currentProduct: {
            //             ...data,
            //             photos: photos ? JSON.parse(data.photos) : [],
            //             options: getState().categories.filters
            //         }
            //     });
            // } else {
            // }
            //сделать запрос
            request({
                method: 'GET',
                url: `get-products?id=${id}`,
            }).then((response) => {
                console.log('get product response', response);
                const data = response.products_on_page[0];
                let photos = [];
                if (data) {
                    photos = data.photos;
                }
                dispatch({
                    type: GET_CURRENT_PRODUCT_SUCCESS, currentProduct: {
                        ...data,
                        photos: photos.length ? JSON.parse(data.photos) : [],
                        options: response.filters
                    }
                });
            });
        } else {
            request({
                method: 'GET',
                url: `get-products${window.location.search}`,
            }).then((response) => {
                // console.log('get product response', response);
                dispatch({ type: GET_PRODUCTS_SUCCESS, products: response.products_on_page });
                dispatch({ type: SET_PAGINATION, pages: response.pages_count });
                dispatch({ type: SET_FILTERS, params: response.filters });
            });
        }
    }
}
