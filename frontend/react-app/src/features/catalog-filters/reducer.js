import { SET_CATEGORIES, SET_FILTERS } from "./actions";
import {
    setSearchParams,
    getUrlParamsArray,
    getAllUrlParamsArray,
    // debounce
} from "./lib";
const initialState = {
    categories: [],
    filters: [],
};
export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            const urlParamArray = getUrlParamsArray("categories");
            return {
                ...state,
                categories: action.params.map((cat) => {
                    return {
                        ...cat,
                        active: (() => {
                            // console.log(urlParamArray);
                            // console.log(cat);
                            if (urlParamArray.includes(cat.code)) {
                                return true;
                            } else {
                                return false;
                            }
                        })(),
                    };
                }),
            };
        }
        // console.log("getUrlParamsArray", getUrlParamsArray("categories"));
        case SET_FILTERS: {
            let { params } = action || [];
            params = params.map((p) => ({
                ...p,
                items: p.items.map((i) => ({ ...i, active: false })),
            }));
            const urlParamArray = getAllUrlParamsArray();
            console.log("urlParamArray", urlParamArray);
            urlParamArray.forEach(([urlKey, urlValue]) => {
                const urlValues = urlValue.split("+");
                params.forEach((filter) => {
                    if (filter.code === urlKey) {
                        filter.items = filter.items.map((item) => {
                            return {
                                ...item,
                                active: urlValues.includes(item.code)
                                    ? true
                                    : false,
                            };
                        });
                    }
                    if (urlKey === 'price_min' && filter.code === 'price') {
                        console.log(filter)
                        filter.items[0].name = urlValue
                        console.log(filter)
                    }
                    if (urlKey === 'price_max' && filter.code === 'price') {
                        console.log(filter)
                        filter.items[1].name = urlValue
                        console.log(filter)
                    }
                });
            });
            return {
                ...state,
                filters: params,
            };
        }
        default:
            return state;
    }
};

categoriesReducer.setCategories = (params) => (dispatch) => {
    // setSearchParams('categories', params);
    dispatch({ type: SET_CATEGORIES, params });
};

categoriesReducer.syncCategoriesWithParams = (params) => (
    dispatch,
    getState
) => {
    // setSearchParams('categories', params);
    // console.log('syncCategoriesWithParams')
    const { categories, filters } = getState().categories;
    dispatch({ type: SET_CATEGORIES, params: categories });
    dispatch({ type: SET_FILTERS, params: filters });
};

categoriesReducer.toggleCategory = (params) => (dispatch, getState) => {
    setSearchParams("categories", params);
    const allCategories = getState().categories.categories;
    const newState = allCategories;
    dispatch({ type: SET_CATEGORIES, params: newState });
};

categoriesReducer.setFilters = (params) => (dispatch) => {
    // setSearchParams('categories', params);
    dispatch({ type: SET_FILTERS, params });
};

categoriesReducer.toggleFilter = (params) => (dispatch, getState) => {
    if (params.parent_code === "price_min" || params.parent_code === "price_max") {
        setSearchParams(params.parent_code, {code: params.value});
    } else {
        setSearchParams(params.parent_code, params);
    }
    const allCategories = getState().categories.filters;
    const newState = allCategories;
    dispatch({ type: SET_FILTERS, params: newState });
};
