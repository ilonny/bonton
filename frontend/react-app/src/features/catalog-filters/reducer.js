import { SET_CATEGORIES, SET_FILTERS } from "./actions";
import { setSearchParams, getUrlParamsArray } from "./lib";
const initialState = {
    categories: [],
    filters: [],
};
export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            {
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
            return {
                ...state,
                filters: action.params
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
    const allCategories = getState().categories.categories;
    dispatch({ type: SET_CATEGORIES, params: allCategories });
};

categoriesReducer.toggleCategory = (params) => (dispatch, getState) => {
    setSearchParams("categories", params);
    // console.log("toggleCategory", params);
    const allCategories = getState().categories.categories;
    // console.log("allCategories", allCategories);
    const newState = allCategories;
    // const newState = allCategories.map((cat) => {
    //     return {
    //         ...cat,
    //         // active: params.code === cat.code && !cat.active,
    //         active: ((cat) => {
    //             if (cat.code === params.code) {
    //                 return !cat.active;
    //             } else {
    //                 return cat.active;
    //             }
    //         })(cat),
    //     };
    // });
    dispatch({ type: SET_CATEGORIES, params: newState });
};

categoriesReducer.setFilters = (params) => (dispatch) => {
    // setSearchParams('categories', params);
    dispatch({ type: SET_FILTERS, params });
};
