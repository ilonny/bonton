import { SET_CATEGORIES, SET_FILTERS, SET_SORT, SET_PAGINATION } from "./actions";
import {
    setSearchParams,
    getUrlParamsArray,
    getAllUrlParamsArray,
    // debounce
} from "./lib";
import { history } from "../../lib"
const initialState = {
    categories: [],
    filters: [],
    sort_price: 0,
    pages: undefined,
    currentPage: undefined,
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
                    if (urlKey === "price_min" && filter.code === "price") {
                        filter.items[0].name = urlValue;
                    }
                    if (urlKey === "price_max" && filter.code === "price") {
                        filter.items[1].name = urlValue;
                    }
                });
            });
            return {
                ...state,
                filters: params,
            };
        }
        case SET_SORT: {
            return {
                ...state,
                sort_price: getUrlParamsArray("sort_price")[0] || 0,
            };
        }
        case SET_PAGINATION: {
            const currentPage = parseInt(getUrlParamsArray("page")[0]) || 1;
            return {
                ...state,
                currentPage,
                pages: action.pages || state.pages
            }
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
    dispatch({ type: SET_SORT });
    dispatch({ type: SET_PAGINATION })
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
    if (
        params.parent_code === "price_min" ||
        params.parent_code === "price_max"
    ) {
        setSearchParams(params.parent_code, { code: params.value });
    } else {
        setSearchParams(params.parent_code, params);
    }
    const allCategories = getState().categories.filters;
    const newState = allCategories;
    dispatch({ type: SET_FILTERS, params: newState });
};

const sortMap = {
    0: "up",
    up: "down",
    down: 0,
};
categoriesReducer.setSorting = (params) => (dispatch, getState) => {
    const sortKey = params.code;
    const currentSort = getState().categories[`${sortKey}`];
    const newVal = sortMap[currentSort];
    console.log("sortKey", sortKey);
    console.log("currentSort", currentSort);
    console.log("newVal", newVal);
    setSearchParams(sortKey, { code: newVal });
    dispatch({
        type: SET_SORT,
        // params: { newVal, sortKey },
    });
};

categoriesReducer.reset = () => dispatch => {
    history.push(`/catalog?type=${getUrlParamsArray("type")[0]}`)
    dispatch(categoriesReducer.syncCategoriesWithParams);
}

categoriesReducer.setPagination = page => dispatch => {
    console.log('setPagination fired', {code: page});
    setSearchParams('page', {code: page});
    dispatch({ type: SET_PAGINATION });
}